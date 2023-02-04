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

module.exports = { getUser, addUser }