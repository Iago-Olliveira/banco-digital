const { contas } = require('../dados/bancodedados');

const saldoUsuario = (req, res) => {
    const { numero_conta, senha } = req.query;

    if (!numero_conta) {
        return res.status(400).json({ mensagem: 'O número da conta é obrigatório!' });
    }

    if (!senha) {
        return res.status(400).json({ mensagem: 'A senha da conta é obrigatória!' });
    }

    const usuarioEncontrado = contas.find((conta) => {
        return conta.numero === Number(numero_conta);
    });

    if (!usuarioEncontrado) {
        return res.status(400).json({ mensagem: 'Conta bancária não encotrada!' });
    }

    if (senha !== "123") {
        return res.status(400).json({ mesnagem: 'Senha Incorreta!' });
    }

    return res.status(200).json({ saldo: `${usuarioEncontrado.saldo}` });
}

module.exports = { saldoUsuario }