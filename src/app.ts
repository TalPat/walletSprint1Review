import * as bodyParser from 'body-parser'
import * as express from 'express'
import * as accountCon from './controllers/account.controllers'
// import * as jwtController from './controllers/jwtcontroller'
// import * as transaction from './controllers/transaction'
// import * as user from './controllers/user'
// import * as middleware from './middleware'
// import * as dotenv from 'dotenv'

// dotenv.config()
const app = express()
module.exports = app
app.set('port', 3000)
app.use(bodyParser.json())

app.post('/account', accountCon.createAccount)
  // { accountName, ownerUserId, balance }

app.all('*', (req, res) => {
  res.sendStatus(404)
})

if (!module.parent) {
  app.listen(app.get('port'), () => {
    console.log('server running on port %d', app.get('port'))
  })
}
