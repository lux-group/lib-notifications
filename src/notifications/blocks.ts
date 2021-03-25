import { Block, KnownBlock } from '@slack/types'

import {
  send,
} from '../message'

export default async(blocks: (KnownBlock | Block)[], appName?: string): Promise<void> => {
  await send({
    blocks,
  }, appName)
}
