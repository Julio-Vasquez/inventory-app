import type { TableColumnsType, TableColumnType } from 'antd'

import type { Product } from '../../../../hooks/api'
import { formatPriceByLocale } from '../../../../utils/formats'
import type { PricesByCurrency } from '../../../../hooks/api/useProducts'
import {
  ActionIcons,
  type ActionIconsProps,
} from '../../../../components/molecules/actions/ActionIcons'

type ColumnSearch = (dataIndex: string) => Partial<TableColumnType<Product>>

export const getProductColumns = (
  actions: ActionIconsProps<Product>,
  getColumnSearchProps: ColumnSearch
): TableColumnsType<Product> => {
  return [
    {
      title: 'Name',
      dataIndex: 'name',
      ...getColumnSearchProps('name'),
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      sorter: (a, b) => a.quantity - b.quantity,
    },
    {
      title: 'Characteristics',
      dataIndex: 'characteristics',
      render: e => e.join(', '),
    },
    {
      title: 'Price',
      dataIndex: 'pricesByCurrency',
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
