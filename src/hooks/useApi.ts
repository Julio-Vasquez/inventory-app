import { useState, useCallback } from 'react'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import { Axios } from '../api/axios.config'

interface ApiState<T> {
  loading: boolean
  error: unknown
  data: T | null
}

enum Methods {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  DELETE = 'delete',
}

export const useApiRequest = <T = unknown>(axiosInstance?: AxiosInstance) => {
  const axios = axiosInstance || Axios
  const [state, setState] = useState<ApiState<T>>({
    loading: false,
    error: null,
    data: null,
  })

  const request = useCallback(
    async (
      method: Methods,
      url: string,
      data?: unknown,
      config?: AxiosRequestConfig
    ): Promise<T | null> => {
      setState({ loading: true, error: null, data: null })

      try {
        const response = await axios.request<T>({
          method,
          url,
          data,
          ...config,
        })

        setState({ loading: false, error: null, data: response.data })
        return response.data
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
      request(Methods.GET, url, undefined, config),
    post: (url: string, data?: unknown, config?: AxiosRequestConfig) =>
      request(Methods.POST, url, data, config),
    put: (url: string, data?: unknown, config?: AxiosRequestConfig) =>
      request(Methods.PUT, url, data, config),
    del: (url: string, config?: AxiosRequestConfig) =>
      request(Methods.DELETE, url, undefined, config),
  }
}
