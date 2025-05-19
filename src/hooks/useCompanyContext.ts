import { useContext } from 'react'

import { CompanyContext } from '../providers/company'
import type { CompanyAction } from '../providers/company'

export const useCompanyContext = (): CompanyAction => {
  const context = useContext(CompanyContext)

  if (!context) {
    throw new Error('useCompany must be used within a CompanyProvider')
  }

  return context
}
