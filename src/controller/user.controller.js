// const { error } = require('console');
const userService = require("../services/user.service");

const register = async (req, res) => {
  const { body } = req;

  if (!body.username || !body.email || !body.password) {
    return res.status(400).json({
      status: "failed",
      message: "data anda tidak sesuai",
    });
  }

  try {
    await userService.register(body);
    return res.status(201).json({
      status: "success",
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

const login = async (req, res) => {
  const { body } = req;
  if (!body.email) {
    return res.status(400).json({
      status: "failed",
      message: "email tidak boleh kosong",
    });
  } else if (!body.password) {
    // console.log();
    return res.status(400).json({
      status: "failed",
      message: "password tidak boleh kosong",
    });
  }

  try {
    const user =await userService.login(body);

    // console.log(body);
    return res.status(200).json({
      status: "success",
      message: "login berhasil",
      data: user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "failed",
      message: "gagal login",
    });
  }
};

const update = async (req, res) => {
  const id = req.params.id;

  const { body } = req;

  if (!body.username || !body.password || !body.password) {
    return res.status(400).json({
      status: "failed",
      message: "data anda tidak sesuai",
    });
  }

  try {
    await userService.update(id, body);

    return res.status(200).json({
      status: "success",
      message: "data anda berhasil di update",
    });
  } catch (error) {
    return res.status(500).json({
      status: "failed",
      message: "data anda tidak sesuai",
    });
  }
};

const viewUser = async (req, res) => {
  try {
    const [user] = await userService.viewUser();

    return res.status(200).json({
      status: "success",
      message: "data berhasil di ambil",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      status: "failed",
      message: "data id anda tidak sesuai",
    });
  }
};

const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    await userService.deleteUser(id);

    return res.status(200).json({
      status: "success",
      message: "user berhasil dihapus",
    });
  } catch (error) {
    return res.status(500).json({
      status: "failed",
      message: "user gagal dihapus",
    });
  }
};

module.exports = { register, login, update, viewUser, deleteUser };
