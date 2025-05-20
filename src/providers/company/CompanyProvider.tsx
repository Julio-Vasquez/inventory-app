import { useMemo, useReducer } from 'react'

import { CompanyContext } from './context'
import type { CompanyProviderProps } from './types'
import { initialState, companyReducer } from './reducer'

export const CompanyProvider = ({ children, values }: CompanyProviderProps) => {
  const [state, dispatch] = useReducer(companyReducer, {
    ...initialState,
    ...values,
  })

  const data = useMemo(() => ({ ...state, dispatch }), [state, dispatch])

  return (
    <CompanyContext.Provider value={data}>{children}</CompanyContext.Provider>
  )
}
