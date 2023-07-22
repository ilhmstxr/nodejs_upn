const dbPool = require("../config/database");

const create_todo = async (user_id, body) => {
  const query = `INSERT INTO todo (user_id,title ,deadline ,description,created_at)
   VALUES ('${user_id}''${body.title}','${body.deadline}','${body.descsription}',CURRENT_TIMESTAMP)`;
  return dbPool.execute(query);
};

const view_todo = async (body) => {
  const query = `SELECT * FROM todo WHERE id ='${body.id}'`;
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
