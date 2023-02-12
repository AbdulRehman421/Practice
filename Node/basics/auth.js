const register = (username) => {
    console.log(`Username: ${username} is already registered`)
}


const login = (loginName) => {
    console.log(`Username: ${loginName} is Logged in`)
}
module.exports = {
    register,
    login
}