## Install

```sh
npm install --save @luxuryescapes/lib-notifications
```

Use

```js
import notifications from '@luxuryescapes/lib-notifications'

notifications.initHook('hook', 'appName')

notifications.initHook('hook2', 'appName2')

await notifications.notify.send.plain('text', 'appName2')

await notifications.notify.send.blocks(
  [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: 'text'
          }
        },
        {
          type: "section",
          block_id: "section567",
          text: {
            type: "mrkdwn",
            text: 'text'
          },
          accessory: {
            type: "image",
            image_url: 'url',
            alt_text: 'text'
          }
        }
      ]
)

await notifications.notify.send.attachments([
  {
    mrkdwn_in: ['text'],
    color: '#004085',
    pretext: 'text',
    title: 'text',
    text: 'text',
    footer: 'text',
    ts: (new Date().getTime()).toString(),
  }
])

await notifications.notify.alerts.info({
      name: "test",
      title: "test - title",
      message: "test - message",
      footer: "test - footer",
    })

await notifications.notify.alerts.error({
      name: "test",
      title: "test - title",
      message: "test - message",
      footer: "test - footer",
    })

await notifications.notify.alerts.warning({
      name: "test",
      title: "test - title",
      message: "test - message",
      footer: "test - footer",
    })

await notifications.notify.alerts.success({
      name: "test",
      title: "test - title",
      message: "test - message",
      footer: "test - footer",
    })


```
