import { createContext } from 'react'

import { initialState } from './reducer'
import type { CompanyAction } from './types'

export const CompanyContext = createContext<CompanyAction | undefined>(
  initialState
)
