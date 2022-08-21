import axios from 'axios'

const envApiUrl = process.env.REACT_APP_API_URL
const defaultApiUrl = `${window.location.protocol}//${window.location.hostname}`
const apiUrl = envApiUrl || defaultApiUrl

const axiosClient = axios.create({
  baseURL: `${apiUrl}`,
  headers: {
    'content-type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
})

axiosClient.interceptors.request.use(async (config: any) => {
  const customHeaders = {
    Authorization: '',
  }

  const token = localStorage.getItem('accessToken')
  if (token) {
    customHeaders.Authorization = `Bearer ${token}`
  }

  return {
    ...config,
    headers: {
      ...customHeaders, // auto attach token
      ...config.headers, // but you can override for some requests
    },
  }
})

axiosClient.interceptors.response.use(
  (response: unknown) => {
    return response
  },
  (error: any) => {
    if (error.response.status === 401) {
      localStorage.removeItem('accessToken')
      window.location.href = '/login'
    } else {
      throw error
    }
  },
)

export default axiosClient
