/* eslint-disable no-unused-vars */
import { MongoClient } from 'mongodb'
import APP from '$lib/variables';

//const uri = `mongodb://${APP.DBUSER}:${APP.DBPASS}@localhost:27017`

const uri = `mongodb+srv://${APP.DBUSER}:${APP.DBPASS}@cluster0.lw33e.mongodb.net/?retryWrites=true&w=majority`
//const uri = `mongodb://localhost`
const options = {} //if you need to set the user & pass optionally.
  
const client = new MongoClient(uri, options)
export const databaseConnection = client.connect()
