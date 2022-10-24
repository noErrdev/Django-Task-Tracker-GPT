import axios from 'axios'
import jwt_decode from "jwt-decode";
import dayjs from 'dayjs'

const baseURL = 'http://127.0.0.1:8000'
let jwtTokens = localStorage.getItem('jwtTokens') ? JSON.parse(localStorage.getItem('jwtTokens')) : null


const axiosInstance = axios.create({
  baseURL,
  headers: {Authorization: `Bearer ${jwtTokens?.access}`}
});

// Do something before a request is sent
axiosInstance.interceptors.request.use(async req => {
  jwtTokens = localStorage.getItem('jwtTokens') ? JSON.parse(localStorage.getItem('jwtTokens')) : null
  req.headers.Authorization = `Bearer ${jwtTokens?.access}`

  const user = jwt_decode(jwtTokens.access)
  const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

  if(!isExpired) return req

  // if expired, we need to get the new accessToken and update the accessToken
  try {
    const response = await axios.post(`${baseURL}/api/accounts/token/refresh/`, {
      refresh: jwtTokens.refresh
    });
    localStorage.setItem('jwtTokens', JSON.stringify(response.data))
    req.headers.Authorization = `Bearer ${response.data.access}`
    return req
  } catch (error) {
    return req
  }
})

export default axiosInstance;