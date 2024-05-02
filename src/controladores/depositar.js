const { contas, depositos } = require('../dados/bancodedados');

const depositoEmConta = (req, res) => {
    const { numero_conta, valor } = req.body;

    if (!numero_conta || !valor) {
        return res.status(400).json({ mensagem: 'O número da conta e valor são obrigatórios!' });
    }

    const usuarioEncontrado = contas.find((conta) => {
        return conta.numero === Number(numero_conta);
    });

    if (!usuarioEncontrado) {
        return res.status(400).json({ mensagem: 'Conta não encotrada!' });
    }

    if (Number(valor) <= 0) {
        return res.status(401).json({ mensagem: 'Depósito não autorizado!' });
    }

    usuarioEncontrado.saldo = usuarioEncontrado.saldo + Number(valor);

    depositos.push({
        data: new Date(),
        numero_conta,
        valor
    });

    return res.status(201).json();
}

module.exports = { depositoEmConta }