import type { TableColumnsType, TableColumnType } from 'antd'

import type { Company } from '../../../../providers/company'
import {
  ActionIcons,
  type ActionIconsProps,
} from '../../../../components/molecules/actions/ActionIcons'

type ColumnSearch = (dataIndex: string) => Partial<TableColumnType<Company>>

export const getCompanyColumns = (
  actions: ActionIconsProps<Company>,
  getColumnSearchProps: ColumnSearch
): TableColumnsType<Company> => {
  return [
    {
      title: 'Name',
      dataIndex: 'name',
      ...getColumnSearchProps('name'),
    },
    { title: 'Address', dataIndex: 'address' },
    { title: 'Email', dataIndex: 'email' },
    { title: 'NIT', dataIndex: 'nit' },
    { title: 'Phone Number', dataIndex: 'phone' },
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
