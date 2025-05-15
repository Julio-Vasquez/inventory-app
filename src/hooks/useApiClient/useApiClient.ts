// useApiClient.ts
import { useState, useCallback } from 'react'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'

import { Axios } from '../../api/axios.config'
import { HttpMethod } from './http-method.enum'

interface ApiState<T> {
  loading: boolean
  error: unknown
  data: T | null
}

const performRequest = async <T>(
  axios: AxiosInstance,
  method: HttpMethod,
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig
): Promise<T> => {
  const response = await axios.request<T>({ method, url, data, ...config })
  return response.data
}

export const useApiClient = <T = unknown>(axiosInstance?: AxiosInstance) => {
  const axios = axiosInstance || Axios
  const [state, setState] = useState<ApiState<T>>({
    loading: false,
    error: null,
    data: null,
  })

  const request = useCallback(
    async (
      method: HttpMethod,
      url: string,
      data?: unknown,
      config?: AxiosRequestConfig
    ): Promise<T | null> => {
      setState({ loading: true, error: null, data: null })

      try {
        const res = await performRequest<T>(axios, method, url, data, config)
        setState({ loading: false, error: null, data: res })
        return res
      } catch (error) {
        setState({ loading: false, error, data: null })
        return null
      }
    },
    [axios]
  )

  return {
    ...state,
    get: (url: string, config?: AxiosRequestConfig) =>
      request(HttpMethod.GET, url, undefined, config),
    post: (url: string, data?: unknown, config?: AxiosRequestConfig) =>
      request(HttpMethod.POST, url, data, config),
    put: (url: string, data?: unknown, config?: AxiosRequestConfig) =>
      request(HttpMethod.PUT, url, data, config),
    del: (url: string, config?: AxiosRequestConfig) =>
      request(HttpMethod.DELETE, url, undefined, config),
  }
}
