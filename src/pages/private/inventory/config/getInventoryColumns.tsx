import type { TableColumnsType } from 'antd'

import type { Inventory } from '../../../../hooks/api'
import { formatPriceByLocale } from '../../../../utils/formats'
import type { PricesByCurrency } from '../../../../hooks/api/useProducts'
import {
  ActionIcons,
  type ActionIconsProps,
} from '../../../../components/molecules/actions/ActionIcons'

export const getInventoryColumns = (
  actions: ActionIconsProps<Inventory>
): TableColumnsType<Inventory> => {
  return [
    {
      title: 'Nombre Producto',
      dataIndex: ['product', 'name'],
    },
    {
      title: 'Cantidad',
      dataIndex: ['product', 'quantity'],
      sorter: (a, b) => a.product.quantity - b.product.quantity,
    },
    {
      title: 'Características',
      dataIndex: ['product', 'characteristics'],
      render: e => e.join(', '),
    },
    {
      title: 'Información',
      dataIndex: 'company',
      render: c => {
        return `${c.name} - ${c.nit}`
      },
    },
    {
      title: 'Precio',
      dataIndex: ['product', 'pricesByCurrency'],
      render: (prices: PricesByCurrency[]) => {
        const price = prices?.[0]
        if (!price) return '-'
        return formatPriceByLocale({
          value: price.value,
          currencyCode: price.currencyCode,
        })
      },
    },
    {
      title: 'Actions',
      render: (_, record) => (
        <ActionIcons
          onView={() => actions.onView?.(record)}
          onEdit={() => actions.onEdit?.(record)}
          onDelete={() => actions.onDelete?.(record)}
        />
      ),
    },
  ]
}
