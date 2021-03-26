import { IncomingWebhook } from '@slack/webhook'

import { Notification } from '../typings/notification'

import config from './config'
import Error from './error'

import info from './notifications/alerts/info'
import error from './notifications/alerts/error'
import success from './notifications/alerts/success'
import warning from './notifications/alerts/warning'

import plainText from './notifications/plainText'
import blocks from './notifications/blocks'
import attachments from './notifications/attachments'

const url = 'https://hooks.slack.com/services/'

const initHook = (hook: string, appName: string, enable: boolean = true): void => {
  if (config.has(appName)) {
    throw new Error(`Hook '${appName}' was already initialized`)
  }
  const webhook = new IncomingWebhook(`${url}${hook}`)
  config.set(appName, { webhook, enable })
}

const notify: Notification.Notify = {
  alerts: {
    info: info,
    error: error,
    success: success,
    warning: warning,
  },
  send: {
    plain: plainText,
    blocks: blocks,
    attachments: attachments,
  },
}

export {
  initHook,
  notify,
}
