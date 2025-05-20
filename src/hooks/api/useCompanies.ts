import useSWR from 'swr'

import { api } from '../../api/api'
import type { ApiResponse } from '../../types'
import { swrFetcher } from '../../utils/fetcher'
import type { Company } from '../../providers/company'

export const useCompanies = () => {
  const {
    data: companies,
    error,
    isLoading,
    mutate: refetch,
  } = useSWR<ApiResponse<Company[]>>(api.companies.allCompanies, swrFetcher)

  const handleRefetch = () => {
    return refetch()
  }

  return { isLoading, error, refetch: handleRefetch, companies }
}
