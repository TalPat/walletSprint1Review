import * as dbFunctions from './db'
import { Account } from '../interfaces/account.interface'

// input object:
// {
//   action: 'create'/'read'/'update'/'delete',
//   values: {accountName: '', balance: '', ownerUserID: ''} #of type ' account'
// }

// function to handle adding account
export function createAccount (account: Account, callback: (result: object) => void) {
  const sql = `INSERT INTO accounts (accountName, balance, ownerUserID) VALUES ('${account.accountName}', ${account.balance}, ${account.ownerUserID})`
  dbFunctions.query(sql, function (err: object) {
    if (err) {
      callback({ error: true })
    } else {
      callback({ error: false })
    }
  })
}

// export function readAccountByID () {

// }

// export function readAcountsByName () {

// }

// export function readAccountsByOwnerID () {

// }

// export function updateAccount () {

// }

// export function deleteAccount () {

// }
