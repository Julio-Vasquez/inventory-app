import axios, { type AxiosInstance } from 'axios'

import { authStore } from '../utils/storage'
import {
  BASE_URL_CONST,
  TIMEOUT_CONST,
} from '../utils/constants/axios.constant'

const setupRequestInterceptor = (instance: AxiosInstance): void => {
  instance.interceptors.request.use(config => {
    const token = authStore.getStoredToken()
    if (token) config.headers.Authorization = `Bearer ${token}`
    return config
  })
}

const setupResponseInterceptor = (instance: AxiosInstance): void => {
  instance.interceptors.response.use(
    response => Promise.resolve(response),
    error => Promise.reject(error)
  )
}

const createAxiosInstance = (): AxiosInstance => {
  const instance = axios.create({
    baseURL: BASE_URL_CONST,
    timeout: TIMEOUT_CONST,
    headers: {}, // default headers
  })

  setupRequestInterceptor(instance)
  setupResponseInterceptor(instance)

  return instance
}

// Exported singleton instance
export const Axios: AxiosInstance = createAxiosInstance()
