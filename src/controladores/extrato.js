const { contas, saques, depositos, transferencias } = require('../dados/bancodedados');

const extratoBancario = (req, res) => {
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

module.exports = { extratoBancario }