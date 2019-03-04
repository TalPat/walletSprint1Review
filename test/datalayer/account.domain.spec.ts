import { Response } from 'express'
// import * as request from 'supertest';
import * as accountDomain from '../../build/datalayer/account.domain';

describe('createAccount', () => {
  it('should return db query failure', (done) => {
    let account = {}
    accountDomain.createAccount(account, (err: Error, res: Response) => {
      if (err) {
        done()
      } else {
        let error = new Error('sql query not constructed')
        done(error)
      }
    }) 
  })
})
