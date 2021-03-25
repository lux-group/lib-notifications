const MockDate = require('mockdate')
const chai = require('chai')
const sinon = require('sinon')
const chaiShallowDeepEqual = require('chai-shallow-deep-equal')

const config = require('../lib/config').default
const message = require('../lib/message')
const notifications = require('../index')

chai.use(chaiShallowDeepEqual)

const expect = chai.expect

describe('Notifications', () => {
  const sandbox = sinon.createSandbox();

  beforeEach(() => {
    let res = {
      send: async () => {}
    }

    config.set('appTest', res)

    sandbox.spy(message, "send")

    const currentDate = '2019-12-22T23:59:00.000Z'
    MockDate.set(currentDate)
  })

  afterEach(() => {
    sandbox.restore()
    MockDate.reset()
  })

  it('should handle no appName', async () => {
    await notifications.notify.send.plain("test")

    expect(message.send.firstCall.args).to.deep.equal([ { text: "test" }, undefined ])
  })

  it('should handle appName', async () => {
    await notifications.notify.send.plain("test", "appTest")

    expect(message.send.firstCall.args).to.deep.equal([ { text: "test" }, "appTest" ])
  })

  it('should handle blocks', async () => {
    await notifications.notify.send.blocks([{
      text: "s"
    }], "appTest")

    expect(message.send.firstCall.args).to.deep.equal([ { 
      blocks: [ {
        text: "s" 
      }]
    }, "appTest" ])
  })

  it('should handle attachments', async () => {
    await notifications.notify.send.attachments([{
      text: "s"
    }], "appTest")

    expect(message.send.firstCall.args).to.deep.equal([ { 
      attachments: [ {
        text: "s" 
      }]
    }, "appTest" ])
  })

  it('should handle alerts - error', async () => {
    await notifications.notify.alerts.error({
      name: "test",
      title: "test - title",
      message: "test - message",
      footer: "test - footer",
    })

    expect(message.send.firstCall.args).to.deep.equal([
      {
        "attachments": [
          {
            "color": "#721c24",
            "footer": "test - footer",
            "mrkdwn_in": [
              "text",
            ],
            "pretext": "test",
            "text": "test - message",
            "title": "test - title",
            "ts": "1577059140000",
          }
        ]
      }
      , undefined
    ])
  })

  it('should handle alerts - info', async () => {
    await notifications.notify.alerts.info({
      name: "test",
      title: "test - title",
      message: "test - message",
      footer: "test - footer",
    })

    expect(message.send.firstCall.args).to.deep.equal([
      {
        "attachments": [
          {
            "color": "#004085",
            "footer": "test - footer",
            "mrkdwn_in": [
              "text",
            ],
            "pretext": "test",
            "text": "test - message",
            "title": "test - title",
            "ts": "1577059140000",
          }
        ]
      }
      , undefined
    ])
  })

  it('should handle alerts - warning', async () => {
    await notifications.notify.alerts.warning({
      name: "test",
      title: "test - title",
      message: "test - message",
      footer: "test - footer",
    })

    expect(message.send.firstCall.args).to.deep.equal([
      {
        "attachments": [
          {
            "color": "#856404",
            "footer": "test - footer",
            "mrkdwn_in": [
              "text",
            ],
            "pretext": "test",
            "text": "test - message",
            "title": "test - title",
            "ts": "1577059140000",
          }
        ]
      }
      , undefined
    ])
  })

  it('should handle alerts - success', async () => {
    await notifications.notify.alerts.success({
      name: "test",
      title: "test - title",
      message: "test - message",
      footer: "test - footer",
    })

    expect(message.send.firstCall.args).to.deep.equal([
      {
        "attachments": [
          {
            "color": "#155724",
            "footer": "test - footer",
            "mrkdwn_in": [
              "text",
            ],
            "pretext": "test",
            "text": "test - message",
            "title": "test - title",
            "ts": "1577059140000",
          }
        ]
      }
      , undefined
    ])
  })
})
