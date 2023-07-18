const userService = require('../services/user.service')

const register = async (req, res) => {
    const { body } = req;

    if ( !body.username || !body.email || !body.password ) {
        return res.status(400).json({
            status: 'fail',
            message: 'data anda tidak sesuai'
        });
    }

    try {
        const user = await userService.register(body);

        if (user == false) {
            error
        }

        return res.status(201).json({
            status: 'success',
            mesaage: 'data berhasil disimpan',
            data: body
        });
    } catch (error) {
        return res.status(500).json({
            status: 'fail',
            mesaage: 'gagal menyimpan data anda'
        });
    }
}

module.exports = { register }