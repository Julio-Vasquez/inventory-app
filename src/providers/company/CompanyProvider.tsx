import { useMemo, useReducer } from 'react'

import { CompanyContext } from './context'
import { initialState, companyReducer } from './reducer'
import type { CompanyProviderProps } from './types'

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
