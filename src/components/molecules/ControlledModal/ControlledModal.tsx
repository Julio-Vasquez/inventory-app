import { Modal } from 'antd'
import type { ReactNode } from 'react'
import { cloneElement, isValidElement } from 'react'

import type { ControlledModalProps } from './types'

const ControlledModal = ({
  visibleState,
  children,
  destroyOnClose = true,
  width = 520,
  centered = true,
  title,
  footer = null,
  inheritCloseToChildren = false,
  onConfirm = undefined,
}: ControlledModalProps) => {
  const { visible, closeDialog } = visibleState

  const renderChildren = (): ReactNode => {
    if (!inheritCloseToChildren || !isValidElement(children)) return children
    return cloneElement(children, { closeDialog })
  }

  return (
    <Modal
      open={visible}
      onOk={onConfirm}
      onCancel={closeDialog}
      destroyOnHidden={destroyOnClose}
      centered={centered}
      title={title}
      width={width}
      footer={footer}
    >
      {renderChildren()}
    </Modal>
  )
}

export default ControlledModal
