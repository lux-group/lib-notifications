import {
  send,
} from '../message'

export default async(message: string, appName?: string): Promise<void> => {
  await send({
    text: message,
  }, appName)
}
