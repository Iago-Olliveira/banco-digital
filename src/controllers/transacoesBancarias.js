const { contas, depositos, saques, transferencias } = require('../data/bancodedados');

const operacaoDepositoSaque = (req, res, transacao, numeroConta, valor) => {
    const usuarioEncontrado = contas.find((conta) => {
        return conta.numero === Number(numeroConta);
    });

    if (!usuarioEncontrado) {
        return res.status(400).json({ mensagem: 'Conta não encontrada!' });
    }

    if (transacao === 'deposito') {
        return usuarioEncontrado.saldo = usuarioEncontrado.saldo + Number(valor);
    } else if (transacao === 'saque') {
        if (Number(valor) <= 0) {
            return res.status(400).json({ mensagem: 'Saldo Insuficiente!' });
        }

        return usuarioEncontrado.saldo = usuarioEncontrado.saldo - Number(valor);
    }
}

const depositar = (req, res) => {
    const { numero_conta, valor } = req.body;

    operacaoDepositoSaque(req, res, 'deposito', numero_conta, valor);

    depositos.push({
        data: new Date(),
        numero_conta,
        valor
    });

    return res.status(201).json();
}

const sacar = (req, res) => {
    const { numero_conta, valor } = req.body;

    operacaoDepositoSaque(req, res, 'saque', numero_conta, valor);

    saques.push({
        data: new Date(),
        numero_conta,
        valor
    })

    return res.status(200).json();
}

const transferir = (req, res) => {
    const { numero_conta_origem, numero_conta_destino, valor, senha } = req.body;

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

const saldo = (req, res) => {
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

const extrato = (req, res) => {
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
        return res.status(400).json({ mensagem: 'Conta bancária não encontrada!' });
    }

    if (senha !== "123") {
        return res.status(400).json({ mesnagem: 'Senha Incorreta!' });
    }

    const depositosUsuario = depositos.filter((deposito) => {
        return deposito.numero_conta === numero_conta;
    });

    const saquesUsuario = saques.filter((saque) => {
        return saque.numero_conta === numero_conta;
    });

    const transferenciasEnviadas = transferencias.filter((tranferencia) => {
        return tranferencia.numero_conta_origem === numero_conta;
    });

    const tranferenciasRecebidas = transferencias.filter((transferencia) => {
        return transferencia.numero_conta_destino === numero_conta;
    });

    return res.status(201).json({ depositos: depositosUsuario, saques: saquesUsuario, transferenciasEnviadas: transferenciasEnviadas, tranferenciasRecebidas: tranferenciasRecebidas });
}

module.exports = { depositar, sacar, transferir, saldo, extrato }