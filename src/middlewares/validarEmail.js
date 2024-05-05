const { contas } = require('../data/bancodedados');

const validarEmail = (req, res, next) => {
    const { email } = req.body;

    const usuarioEmail = contas.find((conta) => {
        return conta.usuario.email.includes(email);
    });

    if (usuarioEmail) {
        return res.status(400).json({ mensagem: 'Já existe uma conta com o E-MAIL informado!' });
    }

    next();
}

module.exports = { validarEmail }