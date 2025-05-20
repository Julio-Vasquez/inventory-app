import useSWR from 'swr'

import { api } from '../../api/api'
import type { ApiResponse } from '../../types'
import { swrFetcher } from '../../utils/fetcher'

export interface PricesByCurrency {
  currencyCode: string
  value: number
}

export type Product = {
  _id: string
  name: string
  quantity: number
  characteristics: string[]
  pricesByCurrency: PricesByCurrency[]
}

export const useProducts = () => {
  const {
    data: products,
    isLoading,
    error,
    mutate: refetch,
  } = useSWR<ApiResponse<Product[]>>(api.products.allProducts, swrFetcher)

  const handleRefetch = () => {
    return refetch()
  }

  return { isLoading, error, refetch: handleRefetch, products }
}
