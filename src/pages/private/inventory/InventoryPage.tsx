import { useState } from 'react'

import BaseTable from '../../../components/molecules/BaseTable'
import { getInventoryColumns } from './config/getInventoryColumns'
import TableActions from '../../../components/molecules/actions/TableActions'

import { api } from '../../../api/api'
import type { ApiResponse } from '../../../types'
import { useNotify } from '../../../hooks/useNotify'
import { useApiClient } from '../../../hooks/useApiClient'
import { useDialogVisible } from '../../../hooks/useDialogVisible'
import { useCompanyContext } from '../../../hooks/useCompanyContext'
import ControlledModal from '../../../components/molecules/ControlledModal'
import InventoryForm from '../../../components/organisms/forms/InventoryForm'
import { useInventory, useProducts, type Inventory } from '../../../hooks/api'
import type { InventoryFormValues } from '../../../components/organisms/forms/InventoryForm'

const InventoryPage = () => {
  const { products } = useProducts()
  const { notify, contextHolder } = useNotify()
  const { activeCompany } = useCompanyContext()
  const [inventory, setInventory] = useState<Inventory>()
  const { inventories, isLoading, refetch } = useInventory()
  const { closeDialog, visible, openDialog } = useDialogVisible()
  const { post, del, put, loading } = useApiClient<ApiResponse<boolean>>()

  const dataSource =
    inventories?.status === 'success' ? inventories.payload : []

  const allProducts = products?.status === 'success' ? products.payload : []

  const handleEditInventory = (record: Inventory) => {
    setInventory(record)
    openDialog()
  }

  const handleDeleteInventory = async (record: Inventory) => {
    try {
      const res = await del(api.inventory.remove(record._id))

      if (res?.status === 'success') {
        notify('success', res.message)
        await refetch()
      }
    } catch (err) {
      notify('error', err as string)
    }
  }

  const handleClickAdd = () => {
    setInventory(undefined)
    openDialog()
  }

  const columns = getInventoryColumns({
    onView: handleEditInventory,
    onEdit: handleEditInventory,
    onDelete: handleDeleteInventory,
  })

  const handleSubmit = async (values: InventoryFormValues) => {
    try {
      const data = { ...values, companyId: activeCompany?.nit }
      const res = inventory
        ? await put(api.inventory.update(inventory._id), data)
        : await post(api.inventory.create, data)
      if (res?.status === 'success') {
        notify('success', res.message)
        await refetch()
        closeDialog()
      } else {
        notify('error', 'Ya existe el inventario')
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
        columns={columns}
        loading={isLoading || loading}
        dataSource={dataSource}
        rowKey={e => e._id}
      />
      <ControlledModal
        visibleState={{ visible, closeDialog }}
        title={inventory ? 'Editar Inventario' : 'Nuevo Inventario'}
      >
        <InventoryForm
          products={allProducts}
          onSubmit={handleSubmit}
          initialValues={
            inventory
              ? {
                  quantity: inventory.quantity,
                  productId: inventory.product._id,
                  _id: inventory._id,
                }
              : undefined
          }
        />
      </ControlledModal>
    </>
  )
}

export default InventoryPage
