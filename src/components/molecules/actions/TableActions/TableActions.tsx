import { Button } from 'antd'
import { PlusOutlined, ReloadOutlined } from '@ant-design/icons'

import type { TableActionsProps } from './types'

import './style.css'

const TableActions = ({ onAdd, onRefresh }: TableActionsProps) => (
  <div className="table-actions">
    <Button type="primary" icon={<PlusOutlined />} onClick={onAdd}>
      Add
    </Button>
    <Button icon={<ReloadOutlined />} onClick={onRefresh}>
      Refresh
    </Button>
  </div>
)

export default TableActions
