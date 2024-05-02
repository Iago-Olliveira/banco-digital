const { contas, saques } = require('../dados/bancodedados');

const saque = (req, res) => {
    const { numero_conta, valor, senha } = req.body;

    if (!numero_conta) {
        return res.status(400).json({ mensagem: 'O número da conta é obrigatório!' });
    }

    if (!valor) {
        return res.status(400).json({ mensagem: 'O valor do saque é obrigatório!' });
    }

    if (!senha) {
        return res.status(400).json({ mensagem: 'A senha da conta é obrigatória!' });
    }

    const usuarioEncontrado = contas.find((conta) => {
        return conta.numero === Number(numero_conta);
    });

    if (!usuarioEncontrado) {
        return res.status(400).json({ mensagem: 'Conta não encotrada!' });
    }

    if (senha !== usuarioEncontrado.usuario.senha) {
        return res.status(400).json({ mesnagem: 'Senha Incorreta!' });
    }

    if (valor <= 0) {
        return res.status(400).json({ mensagem: 'Saldo Insuficiente!' });
    }

    usuarioEncontrado.saldo = usuarioEncontrado.saldo - Number(valor);

    saques.push({
        data: new Date(),
        numero_conta,
        valor
    })

    return res.status(200).json();
}

module.exports = { saque }