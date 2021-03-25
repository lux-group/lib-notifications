import { Block, KnownBlock, MessageAttachment } from '@slack/webhook'

export namespace Notification {
  interface AlertsProps {
    name: string; 
    title: string; 
    message: string; 
    footer: string;
    color: string;
  }
  
  interface Alerts {
    info: (args: Omit<Notification, 'color'>) => Promise<void>;
    error: (args: Omit<Notification, 'color'>) => Promise<void>;
    success: (args: Omit<Notification, 'color'>) => Promise<void>;
    warning: (args: Omit<Notification, 'color'>) => Promise<void>;
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
