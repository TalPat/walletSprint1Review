import * as mysql from 'mysql'
import * as sqlite3 from 'sqlite3'
require('dotenv').config()

export function query (sqlQuery: string, callback: (err: mysql.MysqlError | object, result: object) => void) {
  if (process.env.ACTIVEDB === 'MySQL') {

    // sqlQuery = mysql.escape(sqlQuery)

    const connectDb = (mysql.createConnection({
      host		: process.env.DBHOST,
      user		: process.env.DBUSER,
      password	: process.env.DBPASSWORD,
      database    : process.env.DBNAME
    }))

    connectDb.query(sqlQuery, (err, result) => {
      // if (err) console.log(err)
      connectDb.end()
      callback(err, result)
    })

  } else {
    const dbname: string = process.env.DBNAME
    const db: any = new sqlite3.Database(dbname) // as string)

    // sqlQuery = sqlite3.escape(sqlQuery)

    db.all(sqlQuery, (err: object, result: object) => {
      if (err) {
        console.log(err)
      }
      callback(err, result)
    })
  }
}
