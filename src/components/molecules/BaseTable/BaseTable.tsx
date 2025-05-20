import { Table } from 'antd'

import type { BaseTableProps } from './types'

import './style.css'
const BaseTable = <T,>({ actions, ...props }: BaseTableProps<T>) => (
  <div className="base-table">
    {actions && <div className="actions">{actions}</div>}
    <Table {...props} pagination={{ pageSize: 20 }} />
  </div>
)

export default BaseTable
