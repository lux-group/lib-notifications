import { MessageAttachment } from '@slack/types'

import {
  send,
} from '../message'

export default async(attachments: MessageAttachment[], appName?: string): Promise<void> => {
  await send({
    attachments,
  }, appName)
}
