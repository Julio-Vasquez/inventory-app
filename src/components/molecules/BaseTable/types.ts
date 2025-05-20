import type { TableProps } from 'antd'
import type { ReactNode } from 'react'

export type BaseTableProps<T> = {
  actions?: ReactNode
} & TableProps<T>
