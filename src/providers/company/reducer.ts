import { CompanyActions } from './types'
import type {
  CompanyAction,
  CompanyState,
  DispatchCompanyAction,
} from './types'

export const initialState: CompanyAction = {
  activeCompany: null,
  companies: [],
  dispatch: (action: DispatchCompanyAction) => action,
}

export const companyReducer = (
  state: CompanyState,
  action: DispatchCompanyAction
): CompanyState => {
  switch (action.type) {
    case CompanyActions.SET_COMPANIES:
      return { ...state, companies: action.payload }

    case CompanyActions.SET_ACTIVE_COMPANY:
      return { ...state, activeCompany: action.payload }

    default:
      return state
  }
}
