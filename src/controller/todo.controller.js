// const { error } = require('console');
const todoService = require("../services/todo.service");
const userService = require("../services/user.service");
const jwt = require("jsonwebtoken");

const findUserById = async (req, res) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      status: "failed",
      message: "token invalid",
    });
  }

  try {
    const verif = jwt.verify(token, process.env.JWT_SECRET);

    const user_id = verif.id;
    const user = await userService.findUserById(user_id);

    if (!user) {
      return res.status(404).json({
        status: "failed",
        message: "User tidak Ditemukan",
      });
    }

    return res.status(201).json({
      status: "success",
      message: "User Ditemukan",
      data: user,
    });
  } catch (error) {
    return res.status(401).json({
      status: "success",
      message: "inavlid / token expired",
    });
  }
};

const create_todo = async (req, res) => {
  const { body } = req;
  const user_id = req.user[0][0].id;
  console.log(user_id);
  console.log(body);

  if (!body.title || !body.deadline || !body.description) {
    return res.status(400).json({
      status: "failed",
      message: "data anda tidak sesuai",
    });
  }

  try {
    const cek = await todoService.create_todo({...body,user_id});
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
  try {
    const view = await todoService.view_todo();
    return res.status(200).json({
      status: "success",
      message: "data berhasil di ambil",
      data: view,
    });
  } catch (error) {
    return res.status(500).json({
      status: "failed",
      message: "gagal meyimpan data",
    });
  }
};
const viewAll_todo = async (req, res) => {
  const [view] = await todoService.viewAll_todo();

  try {
    return res.status(200).json({
      status: "success",
      message: "data berhasil di ambil",
      data: view,
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
  if (!body.title || !body.deadline || !body.decription) {
    return res.status(400).json({
      status: "failed",
      message: "data anda tidak sesuai",
    });
  }

  try {
    return res.status(200).json({
      status: "success",
      message: "data berhasil di ambil",
      data: view,
    });
  } catch (error) {
    return res.status(500).json({
      status: "failed",
      message: "gagal meyimpan data",
    });
  }
};

const delete_todo = async (req, res) => {
  const id = req.user[0][0].id;
  console.log(id);

  try {
    // await todoService.delete_todo(id);

    return res.status(200).json({
      status: "success",
      message: "data berhasil di hapus ",
    });
  } catch (error) {
    return res.status(500).json({
      status: "failed",
      message: "todo gagal dihapus",
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
