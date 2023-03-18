import axios from "axios";
import jwt_decode from "jwt-decode";
import dayjs from "dayjs";

export const baseURL = "http://localhost:8000";

const headers = {
  // Authorization: `Bearer ${localStorage.getItem("token")}`,
  "Content-Type": "application/json",
};

const axiosInstance = axios.create({
  baseURL,
  headers,
});

// axiosInstance.interceptors.response.use(async (req) => {
//   const jwtToken = localStorage.getItem("token");
//   const userInfo = jwt_decode(jwtToken);
//   const isExpired = dayjs.unix(userInfo.exp).diff(dayjs()) < 1;

//   if (!isExpired) {
//     return req;
//   }

//   const response = await axios.post(`${baseURL}/api/token/refresh/`, {
//     refresh: authTokens.refresh,
//   });

//   localStorage.setItem("authTokens", JSON.stringify(response.data));
//   req.headers.Authorization = `Bearer ${response.data.access}`;
//   return req;
// });

export default axiosInstance;
