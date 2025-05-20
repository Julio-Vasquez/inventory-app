import { Select } from 'antd'

import type { CompanyOption } from './types'
import { CompanyActions } from '../../../providers/company'
import { useCompanyContext } from '../../../hooks/useCompanyContext'

export const CompanySelect = () => {
  const { companies, activeCompany, dispatch } = useCompanyContext()

  const handleChangeCompany = (
    _nit: string,
    option?: CompanyOption | CompanyOption[]
  ) => {
    if (option && !Array.isArray(option))
      dispatch({
        type: CompanyActions.SET_ACTIVE_COMPANY,
        payload: option.company,
      })
  }

  return (
    <Select
      showSearch
      value={activeCompany?.nit}
      onChange={handleChangeCompany}
      placeholder="Selecciona una compañía"
      style={{ width: '50%' }}
      options={companies.map(company => ({
        label: company.name,
        value: company.nit,
        company,
      }))}
    />
  )
}
