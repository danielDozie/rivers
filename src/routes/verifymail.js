/* eslint-disable no-unused-vars */
import { databaseConnection } from '$lib/database.js';

export async function get(event) {
    const connector = await databaseConnection
    const database = await connector.db(process.env.DB);
    const data = await database.collection('chatroom').find({}).toArray()
    const requestHash = await event.url.searchParams.get('hash')
    const hashData = data.find(({ hash }) => hash === requestHash)
    const newDataObject = Object.assign(hashData, { verified: true })

    try {
        await database.collection('chatroom').updateOne({ _id: newDataObject._id }, { $set: newDataObject }, { upsert: true })

        return {
            status: 303,
            headers: {
                location: `/#chatroom`
            }
        }
    } catch (error) {
        return {
            status: 500,
            body: error.message
        }
    }

}