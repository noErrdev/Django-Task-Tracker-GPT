import axios from "axios";
import jwt_decode from "jwt-decode";
import dayjs from "dayjs";

// export const baseURL = "http://localhost:8000";
export const baseURL = "task-tracker-api.up.railway.app";

let store: any = null;

export const injectStore = (_store: any) => {
  store = _store;
};

const axiosInstance = axios.create({ baseURL });

axiosInstance.interceptors.request.use(
  async (req) => {
    let accessToken = store.getState().user.accessToken;
    let refreshToken = store.getState().user.refreshToken;

    if (!accessToken || !refreshToken) {
      throw new axios.Cancel("Required Token is missing");
    }

    // check if access token is expired
    const decodedAccessToken: any = jwt_decode(accessToken);
    const accessTokenIsExpired =
      dayjs.unix(decodedAccessToken.exp).diff(dayjs()) < 1;

    if (!accessTokenIsExpired) {
      req.headers.authorization = `Bearer ${accessToken}`;
      return req;
    }

    // check if refresh token is expired
    const decodedRefreshToken: any = jwt_decode(refreshToken);

    const refreshTokenIsExpired =
      dayjs.unix(decodedRefreshToken.exp).diff(dayjs()) < 1;

    if (refreshTokenIsExpired) {
      throw new axios.Cancel("Refresh Token is expired");
    }

    // refresh access token
    const { data } = await axios.post(
      `${baseURL}/api/accounts/token/refresh/`,
      { refresh: refreshToken }
    );

    const { access, refresh } = data;
    req.headers.Authorization = `Bearer ${access}`;
    store.dispatch({
      type: "user/updateNewToken",
      payload: {
        access_token: access,
        refresh_token: refresh,
      },
    });
    return req;
  },
  function (error) {
    // Logout user if invalid token
    if (error.code === "ERR_CANCELED") {
      store.dispatch({ type: "user/logout" });
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
