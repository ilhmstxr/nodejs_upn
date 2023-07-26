// const { error } = require('console');
const todoService = require("../services/todo.service");
const userService = require("../services/user.service");
const jwt = require("jsonwebtoken");

const create_todo = async (req, res) => {
  const { body } = req;
  const user_id = req.user[0][0].id;
  const [day, month, year] = body.deadline.split("-");
  const deadline = `${year}-${month}-${day}`;

  if (!body.title || !body.deadline || !body.description) {
    return res.status(400).json({
      status: "failed",
      message: "data anda tidak sesuai",
    });
  }

  try {
    const cek = await todoService.create_todo({ ...body, user_id, deadline });
    console.log(cek);
    return res.status(201).json({
      status: "sucess",
      message: "data berhasil disimpan",
      data: body,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "failed",
      message: "gagal meyimpan data",
    });
  }
};

const view_todo = async (req, res) => {
  const { body } = req;
  const user = req.user[0][0].id;
  const view_id = body.id;

  try {
    const todo = await todoService.view_todo(view_id);
    console.log(todo);

    if (!todo[0][0]) {
      return res.status(404).json({
        status: "failed",
        message: "data tidak ditemukan",
      });
    }
    if (todo[0][0].user_id != user) {
      return res.status(403).json({
        status: "failed",
        message: "data tidak ditemukan",
      });
    }

    return res.status(200).json({
      status: "success",
      message: "data berhasil di ambil",
      data: todo[0][0],
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "failed",
      message: "gagal mengambil data, mohon diisi id todos-nya",
    });
  }
};

const viewAll_todo = async (req, res) => {
  const user_id = req.user[0][0].id;
  const [view_All] = await todoService.viewAll_todo(user_id);

  try {
    return res.status(200).json({
      status: "success",
      message: "data berhasil di ambil",
      data: view_All,
    });
  } catch (error) {
    return res.status(500).json({
      status: "failed",
      message: "gagal meyimpan data",
    });
  }
};

const update_todo = async (req, res) => {
  const { body } = req;
  if (!body.title || !body.deadline || !body.description) {
    return res.status(400).json({
      status: "failed",
      message: "data anda tidak sesuai",
    });
  }

  try {
    return res.status(200).json({
      status: "success",
      message: "data berhasil di update",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "failed",
      message: "gagal meyimpan data",
    });
  }
};

const delete_todo = async (req, res) => {
  const { body } = req;
  const user = req.user[0][0].id;
  const todo_id = body.id;

  try {
    const todo = await todoService.view_todo(todo_id);

    if (!todo[0][0]) {
      return res.status(404).json({
        status: "failed",
        message: "data tidak ditemukan",
      });
    }
    if (todo[0][0].user_id != user) {
      return res.status(403).json({
        status: "failed",
        message: "data tidak ditemukan",
      });
    }
    await todoService.delete_todo(todo_id);

    return res.status(200).json({
      status: "success",
      message: "data berhasil di hapus",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "failed",
      message: "todo gagal dihapus, mohon isi id nya terlebih dahulu",
    });
  }
};

module.exports = {
  create_todo,
  view_todo,
  update_todo,
  viewAll_todo,
  delete_todo,
};
