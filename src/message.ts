import { MessageAttachment, Block, KnownBlock } from '@slack/types'

import config from './config'
import Error from './error'

interface SendProps {
  attachments?: MessageAttachment[];
  blocks?: (KnownBlock | Block)[];
  text?: string;
}

async function send(message: SendProps, appName?: string): Promise<void> {
  let confName = appName
  if (!appName) {
    confName = Array.from(config.keys())[0]
  }

  if (!confName || !config.has(confName)) {
    if (confName) {
      throw new Error(`Hook '${confName}' is not existed`)
    }
    throw new Error('Hook is not existed')
  }

  try {
    await config.get(confName)!.send(message)
  } catch (e) {
    console.error(JSON.stringify(e, null, 2))
  }
}

export {
  send,
}
