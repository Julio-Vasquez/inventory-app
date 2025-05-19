import type { Dispatch, ReactElement } from 'react'

enum CompanyActions {
  SET_COMPANIES = 'SET_COMPANIES',
  SET_ACTIVE_COMPANY = 'SET_ACTIVE_COMPANY',
}

type Company = {
  nit: string
  name: string
  address: string
  phone: string
  email: string
}

type CompanyState = {
  companies: Company[]
  activeCompany: Company | null
}

// posibles actions
type SetCompaniesAction = {
  type: CompanyActions.SET_COMPANIES
  payload: Company[]
}

type SetActiveCompanyAction = {
  type: CompanyActions.SET_ACTIVE_COMPANY
  payload: Company
}

type DispatchCompanyAction = SetCompaniesAction | SetActiveCompanyAction

type CompanyAction = {
  companies: Company[]
  activeCompany: Company | null
  dispatch: Dispatch<DispatchCompanyAction>
}

type CompanyProviderProps = {
  children: ReactElement
  values?: CompanyState
}

export { CompanyActions }
export type {
  Company,
  CompanyAction,
  CompanyProviderProps,
  CompanyState,
  DispatchCompanyAction,
  SetCompaniesAction,
  SetActiveCompanyAction,
}
