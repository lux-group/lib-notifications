import { MessageAttachment } from '@slack/types'

import { Notification } from '../../../typings/notification'

export default (data: Notification.AlertsProps): MessageAttachment => ({
  mrkdwn_in: ['text'],
  color: data.color,
  pretext: data.name,
  title: data.title,
  text: data.message,
  footer: data.footer,
  ts: (new Date().getTime()).toString(),
})
