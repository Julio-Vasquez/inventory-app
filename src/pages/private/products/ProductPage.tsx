import { useState } from 'react'

import BaseTable from '../../../components/molecules/BaseTable'
import { useColumnSearch } from '../../../hooks/useColumnSearch'
import ControlledModal from '../../../components/molecules/ControlledModal'
import {
  ProductForm,
  type ProductFormValues,
} from '../../../components/organisms/forms/ProductForm'
import TableActions from '../../../components/molecules/actions/TableActions'

import { api } from '../../../api/api'
import type { ApiResponse } from '../../../types'
import { useNotify } from '../../../hooks/useNotify'
import { useApiClient } from '../../../hooks/useApiClient'
import { getProductColumns } from './config/getProductColumns'
import { useDialogVisible } from '../../../hooks/useDialogVisible'
import { useProducts, type Product } from '../../../hooks/api/useProducts'

const ProductPage = () => {
  const { notify, contextHolder } = useNotify()
  const [product, setProduct] = useState<Product>()
  const { products, isLoading, refetch } = useProducts()
  const { getColumnSearchProps } = useColumnSearch<Product>()
  const { closeDialog, visible, openDialog } = useDialogVisible()
  const { post, del, put, loading } = useApiClient<ApiResponse<boolean>>()

  const dataSource = products?.status === 'success' ? products.payload : []

  const handleEditProduct = (record: Product) => {
    setProduct(record)
    openDialog()
  }

  const handleDeleteProduct = async (record: Product) => {
    try {
      const res = await del(api.products.remove(record._id))

      if (res?.status === 'success') {
        notify('success', res.message)
        await refetch()
      }
    } catch (err) {
      notify('error', err as string)
    }
  }

  const handleClickAdd = () => {
    setProduct(undefined)
    openDialog()
  }

  const columns = getProductColumns(
    {
      onView: handleEditProduct,
      onEdit: handleEditProduct,
      onDelete: handleDeleteProduct,
    },
    getColumnSearchProps
  )

  const handleSubmit = async (values: ProductFormValues) => {
    try {
      const res = product
        ? await put(api.products.update(product._id), values)
        : await post(api.products.create, values)
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
        dataSource={dataSource}
        columns={columns}
        loading={isLoading || loading}
        rowKey={e => e._id}
        actions={<TableActions onAdd={handleClickAdd} onRefresh={refetch} />}
      />
      <ControlledModal
        visibleState={{ visible, closeDialog }}
        title={product ? 'Editar producto' : 'Nuevo producto'}
      >
        <ProductForm onSubmit={handleSubmit} initialValues={product} />
      </ControlledModal>
    </>
  )
}

export default ProductPage
