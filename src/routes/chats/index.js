import { databaseConnection } from '$lib/database.js';

export async function get() {
    const connector = await databaseConnection
    const database = await connector.db(process.env.DB);
    const data = await database.collection('chatroom').find({}).toArray()
    
    try {
        if(data.length > 0) {
            return {
                status: 200,
                body: {
                    data
                }
            }
        }
    } catch(err) {
        return {
            status: 500,
            body: err.message
        }
    }
    
    
};

export async function post({request}) {
    const formBody = await request.json();
    const connector = await databaseConnection
    const database = await connector.db(process.env.DB);
    const data = await database.collection('chatroom').insertOne(formBody)
    
    if(data.acknowledged){
        return {
            status: 200,
        }
    }
    return {
        status: 500,
        error: new Error("Operation failed!")
    }
   
}

// export async function patch(){}

// export async function del(){}