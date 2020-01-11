import axios from 'axios'

const UNPROTECTED_PATHS = [
  "loginUser",
  "registerUser"
]

axios.defaults.baseURL = 'http://localhost:8080'

const isUnprotectedPath = (url) => {
  for (let path of UNPROTECTED_PATHS) {
    if (url.includes(path)) {
      return true
    }
  }
  return false
}

axios.interceptors.request.use(
  async config => {
    if (isUnprotectedPath(config.url)) {
      return config
    }

    let token = localStorage.getItem("ACCESS_TOKEN");
    config.headers["Authorization"] = `Bearer ${token}`;
    return config;
  },
  async error => {
    throw error;
  },
);

axios.interceptors.response.use(
  async config => {
    return config;
  },
  async error => {
    if (error.request === undefined) throw error;

    let url = error.request.responseURL;
    if (error.request.status === 401 && isUnprotectedPath(url)) {
      throw error;
    }

    if (error.request.status === 401) {
      console.log("Session expire, redirect to login");

      localStorage.removeItem("ACCESS_TOKEN")
    }
  }
)

export default axios