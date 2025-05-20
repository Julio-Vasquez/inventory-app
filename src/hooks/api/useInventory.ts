import useSWR from 'swr'

import { api } from '../../api/api'
import type { Product } from './useProducts'
import type { ApiResponse } from '../../types'
import { swrFetcher } from '../../utils/fetcher'
import type { Company } from '../../providers/company'
import { useCompanyContext } from '../useCompanyContext'

export type Inventory = {
  status: string
  _id: string
  quantity: number
  product: Product
  company: Pick<Company, 'name' | 'nit'>
}

export const useInventory = () => {
  const { activeCompany } = useCompanyContext()
  if (!activeCompany) throw new Error('No active company')

  const {
    data: inventories,
    error,
    isLoading,
    mutate: refetch,
  } = useSWR<ApiResponse<Inventory[]>>(
    api.inventory.inventory(activeCompany.nit),
    swrFetcher
  )

  const handleRefetch = () => {
    return refetch()
  }

  return { isLoading, error, refetch: handleRefetch, inventories }
}
