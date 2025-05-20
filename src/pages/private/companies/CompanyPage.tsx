import { useState } from 'react'

import BaseTable from '../../../components/molecules/BaseTable'
import { useColumnSearch } from '../../../hooks/useColumnSearch'
import ControlledModal from '../../../components/molecules/ControlledModal'
import TableActions from '../../../components/molecules/actions/TableActions'
import CompanyForm, {
  type CompanyFormValues,
} from '../../../components/organisms/forms/CompanyForm'

import { api } from '../../../api/api'
import { useCompanies } from '../../../hooks/api'
import type { ApiResponse } from '../../../types'
import { useNotify } from '../../../hooks/useNotify'
import type { Company } from '../../../providers/company'
import { useApiClient } from '../../../hooks/useApiClient'
import { getCompanyColumns } from './config/getCompanyColumns'
import { useDialogVisible } from '../../../hooks/useDialogVisible'

const CompanyPage = () => {
  const { notify, contextHolder } = useNotify()
  const [company, setCompany] = useState<Company>()
  const { companies, isLoading, refetch } = useCompanies()
  const { getColumnSearchProps } = useColumnSearch<Company>()
  const { closeDialog, visible, openDialog } = useDialogVisible()
  const { post, del, put, loading } = useApiClient<ApiResponse<boolean>>()

  const dataSource = companies?.status === 'success' ? companies.payload : []

  const handleEditCompany = (record: Company) => {
    setCompany(record)
    openDialog()
  }

  const handleDeleteCompany = async (record: Company) => {
    try {
      const res = await del(api.companies.remove(record.nit))

      if (res?.status === 'success') {
        notify('success', res.message)
        await refetch()
      }
    } catch (err) {
      notify('error', err as string)
    }
  }

  const handleClickAdd = () => {
    setCompany(undefined)
    openDialog()
  }

  const columns = getCompanyColumns(
    {
      onView: handleEditCompany,
      onEdit: handleEditCompany,
      onDelete: handleDeleteCompany,
    },
    getColumnSearchProps
  )

  const handleSubmit = async (values: CompanyFormValues) => {
    try {
      const res = company
        ? await put(api.companies.update(company.nit), values)
        : await post(api.companies.create, values)
      if (res?.status === 'success') {
        notify('success', res.message)
        await refetch()
        closeDialog()
      }
    } catch (err) {
      notify('error', err as string)
    }
  }

  return (
    <>
      {contextHolder}
      <BaseTable
        actions={<TableActions onAdd={handleClickAdd} onRefresh={refetch} />}
        dataSource={dataSource}
        columns={columns}
        loading={isLoading || loading}
        rowKey={e => e.nit}
      />
      <ControlledModal
        visibleState={{ visible, closeDialog }}
        title={company ? 'Editar Compañía' : 'Nueva Compañía'}
      >
        <CompanyForm onSubmit={handleSubmit} initialValues={company} />
      </ControlledModal>
    </>
  )
}

export default CompanyPage
