import type { ReactElement, ReactNode } from 'react'

export type VisibilityController = {
  visible: boolean
  closeDialog: () => void
}

export type ControlledModalProps<T = { closeDialog: () => void }> = {
  visibleState: VisibilityController
  children?: ReactElement<T>
  destroyOnClose?: boolean
  width?: number
  centered?: boolean
  title?: ReactNode
  footer?: ReactNode
  inheritCloseToChildren?: boolean
  onConfirm?: () => void
}
