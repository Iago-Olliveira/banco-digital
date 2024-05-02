let { contas } = require('../dados/bancodedados');

const deletarConta = (req, res) => {
    const { numeroConta } = req.params;

    if (!numeroConta || !Number(numeroConta)) {
        return res.status(400).json({ mensagem: 'Número da Conta é Inválido!' });
    }

    const usuarioEncontrado = contas.find((conta) => {
        return conta.numero === Number(numeroConta);
    });

    if (usuarioEncontrado.saldo === 0) {
        const indice = contas.findIndex((conta) => {
            return conta.numero === Number(numeroConta);
        });

        contas.splice(indice, 1);

        return res.status(201).json();
    } else {
        return res.status(401).json({ mensagem: 'A conta só pode ser removida se o saldo for zero.' });
    }
}

module.exports = { deletarConta }