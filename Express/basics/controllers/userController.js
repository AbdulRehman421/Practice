const UserModel = require('../models/userModel')
const getUser = (request, response) => {
    response.send({
        staus: 200,
        message: 'Hi'
    });
}
const addUser = (request, response) => {
    const { username } = request.body;
    response.json({
        success: true,
        msg: `Welcome ${username}`
    })
}
const createUser = async (request, response) => {
    try {
        const { name, email, password, isAdmin } = request.body;
        const user = await UserModel.create({ name, email, password, isAdmin });
        response.status(201).json({
            message: 'Welcome',
            user,
        })
    } catch (error) {
        console.log(`error creating user ${error.message}`)
        response.status(400).json({
            message: 'error creating user',
            error,
        })
    }

}

module.exports = { getUser, addUser, createUser }