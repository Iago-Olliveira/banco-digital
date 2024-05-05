const { contas } = require('../data/bancodedados');

const validarCPF = (req, res, next) => {
    const { cpf } = req.body;

    if (cpf.length !== 11) {
        return res.status(400).json({ mensagem: 'O CPF informado não contêm 11 digitos.' });
    }

    const usuarioCPF = contas.find((conta) => {
        return conta.usuario.cpf.includes(cpf);
    });

    if (usuarioCPF) {
        return res.status(400).json({ mensagem: 'Já existe uma conta com CPF informado!' });
    }

    next();
}

module.exports = { validarCPF }