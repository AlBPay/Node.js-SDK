'use strict'

const CloudIpsp = require('../lib')

const fondy = new CloudIpsp(
  {
    merchantId: 1545859,
    secretKey: 'test'
  }
)
const data = {
  order_id: 'Your Order Id',
  order_desc: 'test order',
  currency: 'USD',
  amount: '1000'
}
fondy.Checkout(data).then(data => {
  console.log(data)
}).catch((error) => {
  console.log(error)
})
