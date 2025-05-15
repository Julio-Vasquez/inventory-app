import useSWR from 'swr'

import { api } from '../api/api'
import { swrFetcher } from '../utils/fetcher'

export const useCompanies = () => {
  const { data, error, isLoading, isValidating, mutate } = useSWR(
    api.companies.allCompanies,
    swrFetcher
  )
  return { data, error, isLoading, isValidating, mutate }
}
