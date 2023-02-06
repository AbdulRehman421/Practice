const express = require('express');
const app = express()

// Database setup 

const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'ecom';
let findResult;
let filteredDocs;


async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('produts');
    // console.log(collection)
    findResult = await collection.find({}).toArray();
    // console.log('Found documents =>', findResult);
    filteredDocs = await collection.find({ price: 200 }).toArray();
    console.log('Found documents filtered by { a: 3 } =>', filteredDocs);
    return 'done.';
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());


app.get('/', (request, response) => {
    response.send(findResult)
    response.send(filteredDocs)
})
app.listen(4000, () => { console.log('Listening on port 4000') })