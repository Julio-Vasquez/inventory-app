import axios, { type AxiosInstance } from 'axios'

const BASE_URL_CONST = 'http://localhost:8550'
const TIMEOUT_CONST = 18000

const configAxios = (): AxiosInstance => {
  const axiosInstance = axios.create({
    baseURL: BASE_URL_CONST,
    timeout: TIMEOUT_CONST,
    headers: {},
  })

  const onFulfilled = <T>(next: T) => {
    return Promise.resolve(next)
  }

  const onRejected = (error: unknown) => {
    return Promise.reject(error)
  }

  axiosInstance.interceptors.request.use(config => {
    // const token = getTokenFromStorage()
    // if (token) config.headers.Authorization = `Bearer ${token}`
    return config
  })

  axiosInstance.interceptors.response.use(onFulfilled, onRejected)

  return axiosInstance
}

export const Axios = configAxios()
