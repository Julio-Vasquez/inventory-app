import { useEffect } from 'react'

import { useCompanies } from './useCompanies'
import { CompanyActions } from '../providers/company'
import { useCompanyContext } from './useCompanyContext'

export const useCompanyInitializer = () => {
  const { dispatch } = useCompanyContext()
  const { companies, error } = useCompanies()

  console.log('%cCOMPANIES FETCH', 'COLOR=#f51', { companies, error })
  useEffect(() => {
    if (!companies || companies.status === 'error') return

    dispatch({ type: CompanyActions.SET_COMPANIES, payload: companies.payload })

    dispatch({
      type: CompanyActions.SET_ACTIVE_COMPANY,
      payload: companies.payload[0],
    })
  }, [companies, dispatch])
}
