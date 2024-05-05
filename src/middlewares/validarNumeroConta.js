const { contas } = require('../data/bancodedados');

const validarNumeroConta = (req, res, next) => {
    const { numeroConta } = req.params;

    if (!numeroConta || !Number(numeroConta)) {
        return res.status(400).json({ mensagem: 'Número da Conta é Inválido!' });
    }

    const existeConta = contas.some((conta) => {
        return conta.numero === Number(numeroConta);
    });

    if (!existeConta) {
        return res.status(400).json({ mensagem: 'A conta bancária informada não existe!' });
    }

    next();
}

module.exports = { validarNumeroConta }