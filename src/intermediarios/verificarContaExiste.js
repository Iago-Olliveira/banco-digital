const { contas } = require('../dados/bancodedados');

const verificarContaExiste = (req, res, next) => {
    const { numeroConta } = req.params;

    const usuarioEncontrado = contas.find((conta) => {
        return conta.numero === Number(numeroConta);
    });

    if (!usuarioEncontrado) {
        return res.status(400).json({ mensagem: 'Conta não encotrada!' });
    }

    next()
}

module.exports = { verificarContaExiste }