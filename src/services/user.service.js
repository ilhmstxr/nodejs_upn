// database sementara
const dbPool = require("../config/database");
// const { nanoid } = require("nanoid");
// import { nanoid } from "nanoid";
// const users = [];

const register = async (body) => {
  // MEMBUAT REGISTER LALU DI TEST DI POSTMAN
  // const id = nanoid(4);
  // const newUser = {
  //   id: id,
  //   username: body.username,
  //   email: body.email,
  //   password: body.password,
  // };

  // users.push(newUser);
  // const isSuccess = users.filter((user) => user.id === id).length > 0;
  // return isSuccess;

  const query = `INSERT INTO user (username ,email ,password) VALUES ('${body.username}','${body.email}','${body.password}')`;

  return dbPool.execute(query);
};

const login = async (body) => {
  // const user =
  //   user.filter(
  //     (user) => user.email === body.email && user.password === body.password
  //   ).length > 0;

  // return user;

  const query = `SELECT id,username,email FROM user WHERE email = '${body.email}' AND password = '${body.password}'  `;

  return dbPool.execute(query);
};

const update = async (id, body) => {
  const query = `UPDATE 'user' SET 'username' = '${body.username}', 'email' = '${body.email}', 'password' = '${body.password}' WHERE id = '${id}'`;
  return dbPool.execute(query);
};

const viewUser = async () => {
  const query = `SELECT id,username, email FROM user`;
  return dbPool.execute(query);
};

const deleteUser = async (id) => {
  const query = `DELETE FROM user WHERE id = ${id}`;
  return dbPool.execute(query);
};

module.exports = { register, login, update, viewUser, deleteUser };
