// database sementara
const { nanoid } = require("nanoid");
const users = [];

const register = async (body) => {
  const id = nanoid(4);
  const newUser = {
    id: id,
    username: body.username,
    email: body.email,
    password: body.password,
  };

  users.push(newUser);
  const isSuccess = users.filter((user) => user.id === id).length > 0;
  return isSuccess;
};

const login = async (body) => {
  const user =
    user.filter(
      (user) => user.email === body.email && user.password === body.password
    ).length > 0;

  return user;
};

module.exports = { register, login };
