import { notification } from 'antd'
import type { NotificationPlacement } from 'antd/es/notification/interface'

export type NotifyType = 'success' | 'info' | 'warning' | 'error'

export const useNotify = () => {
  const [api, contextHolder] = notification.useNotification()

  const notify = (
    type: NotifyType,
    message: string,
    description?: string,
    placement: NotificationPlacement = 'bottomRight'
  ) => api[type]({ message, description, placement })

  return { notify, contextHolder }
}
