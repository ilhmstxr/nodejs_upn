const { nanoid } = require('nanoid')
const users = [] // database sementara

const register = async (body) => {
    const id = nanoid(4) //
    const newUser = {
        id: id,
        username: body.username,
        email: body.email,
        password: body.password
    }

    users.push(newUser);

    const isSuccess = users.filter((user) => user.id === id).length > 0

    return isSuccess
}

module.exports = { register }