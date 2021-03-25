import { Notification } from '../../../typings/notification'

import attachments from '../attachments'
import init from './init'

export default async(data: Omit<Notification.AlertsProps, 'color'>, appName?: string) => {
  await attachments([
    init({
      ...data,
      color: '#721c24',
    }),
  ], appName)
}
