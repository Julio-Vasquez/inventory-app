import { createContext } from 'react'

import type { CompanyAction } from './types'
import { initialState } from './reducer'

export const CompanyContext = createContext<CompanyAction | undefined>(
  initialState
)
