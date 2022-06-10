import { Block, KnownBlock, MessageAttachment } from '@slack/types'

export namespace Notification {
  interface AlertsProps {
    name?: string;
    title?: string;
    message?: string;
    footer?: string;
    color: string;
  }

  interface Alerts {
    info: (args: Omit<AlertsProps, 'color'>, appName?: string) => Promise<void>;
    error: (args: Omit<AlertsProps, 'color'>, appName?: string) => Promise<void>;
    success: (args: Omit<AlertsProps, 'color'>, appName?: string) => Promise<void>;
    warning: (args: Omit<AlertsProps, 'color'>, appName?: string) => Promise<void>;
  }

  interface Send {
    plain: (message: string, appName?: string) => Promise<void>;
    blocks: (blocks: (KnownBlock | Block)[], appName?: string) => Promise<void>;
    attachments: (attachments: MessageAttachment[], appName?: string) => Promise<void>;
  }

  interface Notify {
    alerts: Alerts;
    send: Send;
  }
}
