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
export default apiClient
