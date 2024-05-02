const { contas, transferencias } = require('../dados/bancodedados');

const transferir = (req, res) => {
    const { numero_conta_origem, numero_conta_destino, valor, senha } = req.body;

    if (!numero_conta_origem || !numero_conta_destino) {
        return res.status(400).json({ mensagem: 'O número da conta de origem/destino é obrigatório!' });
    }

    if (!valor) {
        return res.status(400).json({ mensagem: 'O valor da transferência é obrigatório!' });
    }

    if (!senha) {
        return res.status(400).json({ mensagem: 'A senha da conta de origem é obrigatória!' });
    }

    const usuarioDeOrigem = contas.find((conta) => {
        return conta.numero === Number(numero_conta_origem);
    });

    const usuarioDeDestino = contas.find((conta) => {
        return conta.numero === Number(numero_conta_destino);
    });

    if (!usuarioDeOrigem) {
        return res.status(400).json({ mensagem: 'Conta de Origem não encontrada!' });
    }

    if (!usuarioDeDestino) {
        return res.status(400).json({ mensagem: 'Conta de Destino não encontrada!' });
    }

    if (senha !== usuarioDeOrigem.usuario.senha) {
        return res.status(400).json({ mesnagem: 'Senha Incorreta!' });
    }

    if (valor > usuarioDeOrigem.saldo) {
        return res.status(400).json({ mensagem: 'Saldo Insuficiente!' });
    }

    usuarioDeOrigem.saldo = usuarioDeOrigem.saldo - Number(valor);
    usuarioDeDestino.saldo = usuarioDeDestino.saldo + Number(valor);

    transferencias.push({
        data: new Date(),
        numero_conta_origem,
        numero_conta_destino,
        valor
    });

    return res.status(200).json();
}

module.exports = { transferir }