'use strict'

const CloudIpsp = require('../lib')
const util = require('../lib/util')

const fondy = new CloudIpsp(
  {
    merchantId: 1545859,
    secretKey: 'test'
  }
)
const date = new Date().toISOString().slice(0, 10)
const OrderId = util.generateOrderId()

const data = {
  order_desc: 'test order',
  order_id: OrderId,
  currency: 'USD',
  amount: 1000,
  recurring_data:
  {
    every: 5,
    period: 'day',
    amount: 1000,
    start_time: date,
    state: 'y',
    Readonly: 'n'
  }
}
fondy.Subscription(data).then(data => {
  console.log(data)
}).catch((error) => {
  console.log(error)
})
const StopData = {
  order_id: OrderId,
  action: 'stop'
}

fondy.SubscriptionActions(StopData).then(data => {
  console.log(data)
}).catch((error) => {
  console.log(error)
})