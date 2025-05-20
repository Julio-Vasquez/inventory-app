import { Space, Tooltip, Popconfirm } from 'antd'
import { EyeOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'

import type { ActionIconsProps } from './types'

import './style.css'

export const ActionIcons = ({
  onView,
  onEdit,
  onDelete,
  confirmDelete = true,
  tooltipPlacement = 'top',
}: ActionIconsProps) => {
  return (
    <Space size="middle">
      {onView && (
        <Tooltip title="Ver" placement={tooltipPlacement}>
          <EyeOutlined
            className="action-icon"
            onClick={onView}
            data-testid="icon-view"
          />
        </Tooltip>
      )}

      {onEdit && (
        <Tooltip title="Editar" placement={tooltipPlacement}>
          <EditOutlined
            className="action-icon"
            onClick={onEdit}
            data-testid="icon-edit"
          />
        </Tooltip>
      )}

      {onDelete && (
        <Tooltip title="Eliminar" placement={tooltipPlacement}>
          {confirmDelete ? (
            <Popconfirm
              title="¿Estás seguro de eliminar?"
              onConfirm={onDelete}
              okText="Sí"
              cancelText="No"
            >
              <DeleteOutlined
                className="action-icon action-icon-red"
                data-testid="icon-delete"
              />
            </Popconfirm>
          ) : (
            <DeleteOutlined
              className="action-icon action-icon-red"
              onClick={onDelete}
              data-testid="icon-delete"
            />
          )}
        </Tooltip>
      )}
    </Space>
  )
}
