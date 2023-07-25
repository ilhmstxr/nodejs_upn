const dbPool = require("../config/database");

const create_todo = async (todoData) => {
  const { title, deadline, description, user_id } = todoData;
  const created_at = new Date();

  const query = `INSERT INTO todo (title, deadline, description, user_id, created_at) VALUES (?,?,?,?,?) `;
  const value = [title, deadline, description, user_id, created_at];
  return dbPool.execute(query,value);
  
};

const view_todo = async (id) => {
  const query = `SELECT * FROM todo WHERE id ='${id}'`;
  return dbPool.execute(query);
};

const viewAll_todo = async (user_id) => {
  const query = `SELECT * FROM todo WHERE user_id = '${user_id}'`;
  return dbPool.execute(query);
};

const update_todo = async (id, body) => {
  const query = `UPDATE todo SET title = '${body.title}',
   description = '${body.description}', deadline = '${body.deadline}' WHERE id = '${id}'`;
  return dbPool.execute(query);
};

const delete_todo = async (id) => {
  const query = `DELETE FROM todo WHERE id = ${id}`;
  return dbPool.execute(query);
};

module.exports = {
  create_todo,
  view_todo,
  update_todo,
  viewAll_todo,
  delete_todo,
};
