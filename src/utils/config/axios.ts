import axios from 'axios'

const baseDomain = 'https://jsonplaceholder.typicode.com'
const baseURL = `${baseDomain}` // Incase of /api/v1;

// ALL default configuration here
const token = ''

const apiClient = axios.create({
  baseURL,
  headers: {
    Accept: 'application/json',
    ContentType: 'application/json',
    Authorization: `Bearer ${token}`,
  },
})

// Add a REQUEST interceptor
axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a RESPONSE interceptor
axios.interceptors.response.use(
  response => {
    return response
  },
  async error => {
    const originalRequest = error.config
    originalRequest._retryCount = ++originalRequest._retryCount || 1

    if (originalRequest._retryCount < 3) {
      const forceAuthenticationPopup: boolean = [401, 403].includes(error?.response?.status)
      const newToken = await getRefreshToken(forceAuthenticationPopup)

      axios.defaults.headers.common['Authorization'] = `Bearer ${newToken}`
      return axios(originalRequest)
    }

    return Promise.reject(error)
  }
)

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getRefreshToken = (forceAuthenticationPopup: boolean) => {
  // call api for get new token
  return 'ok123'
}

export default apiClient
