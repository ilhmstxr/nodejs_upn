const dbPool = require("../config/database");

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
  const query = `SELECT id,username,email FROM user WHERE email = '${body.email}' AND password = '${body.password}'  `;
  return dbPool.execute(query);
};

const update = async (id, body) => {
  const query = `UPDATE user SET username = '${body.username}', email = '${body.email}', password = '${body.password}' WHERE id = '${id}'`;
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

const getUserByEmail = async (email) => {
  const query = `SELECT * FROM user WHERE email = '${email}'`;
  return dbPool.execute(query);
};

const findUserById = async (user_id) => {
  const query = `SELECT * FROM user WHERE id = '${user_id}'`;
  return dbPool.execute(query);
};

module.exports = {
  register,
  login,
  update,
  viewUser,
  deleteUser,
  getUserByEmail,
  findUserById
};
