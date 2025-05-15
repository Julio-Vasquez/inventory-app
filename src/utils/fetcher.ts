import { Axios } from '../api/axios.config'

export const swrFetcher = async <T = unknown>(url: string): Promise<T> => {
  const response = await Axios.get<T>(url)
  return response.data
}
