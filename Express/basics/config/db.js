const mongoose = require('mongoose');

const colors = require('colors')

const connectDb = async () => {
    try {
        const connect = await mongoose.connect('mongodb://localhost:27017/expressjs');
        console.log(`Connected to ${connect.connection.host}`.bgGreen)
    } catch (error) {
        console.log(`Mongodb connection error: ${error}`.bgRed)
        // process.exit(1)
    }
}
module.exports = connectDb