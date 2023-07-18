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
    const user = await userService.register(body);

    if (user == false) {
      error;
    }

    return res.status(201).json({
      status: "success",
      message: "data berhasil disimpan",
      data: body,
    });
  } catch (error) {
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
    return res.status(400).json({
      status: "failed",
      message: "password tidak boleh kosong",
    });
  }

  try {
    const user = await userService.login(body);
    return res.status(200).json({
      status: "success",
      message: "login berhasil",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      status: "failed",
      message: "gagal login",
    });
  }
};

module.exports = { register, login };
