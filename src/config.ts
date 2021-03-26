import { IncomingWebhook } from '@slack/webhook'

interface Props {
  webhook: IncomingWebhook;
  enable: boolean;
}

const config = new Map<string, Props>()

export default config
