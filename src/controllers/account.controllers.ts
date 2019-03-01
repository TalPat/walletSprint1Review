import { Request, Response } from 'express'
import * as accountDom from '../datalayer/account.domain'
import * as accInterface from '../interfaces/account.interface'

export function createAccount (req: Request, res: Response) {
  const data = req.body
  const account: accInterface.Account = {
    accountName: data.accountName,
    ownerUserID: 21,
    balance: data.balance }
  accountDom.createAccount(account, function (result) {
    if (result.error) {
      res.status(500).send('Account creation failed')
    } else {
      res.send('Account created')
    }
  })

    // valiidate
    // if validate fails, return 'invalid inputs'
    // if validate suceeds call createAccountDom
    // recieve 1?0 fron createAccountDom
    // if 1 return 'created'
    // if 0 retutn 'failed to create'

}
