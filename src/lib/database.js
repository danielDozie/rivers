/* eslint-disable no-unused-vars */
import dotenv from 'dotenv'
dotenv.config()

import { MongoClient } from 'mongodb'

//const uri = `mongodb://${process.env.DBUSER}:${process.env.DBPASS}@localhost`
const uri = `mongodb://localhost`
const options = {} //if you need to set the user & pass optionally.
  
const client = new MongoClient(uri, options)
export const databaseConnection = client.connect()
