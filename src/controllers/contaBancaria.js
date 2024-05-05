let { contas, idConta } = require('../data/bancodedados');

const listarContasBancarias = (req, res) => {
    return res.status(200).json(contas);
}

const cadastrarConta = (req, res) => {
    const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;

    contas.push({
        numero: idConta++,
        saldo: 0,
        usuario: {
            nome,
            cpf,
            data_nascimento,
            telefone,
            email,
            senha
        }
    });

    return res.status(200).json();
}

const atualizarConta = (req, res) => {
    const { numeroConta } = req.params;
    const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;

    const usuarioEncontrado = contas.find((conta) => {
        return conta.numero === Number(numeroConta);
    });

    usuarioEncontrado.usuario.nome = nome;
    usuarioEncontrado.usuario.cpf = cpf;
    usuarioEncontrado.usuario.data_nascimento = data_nascimento;
    usuarioEncontrado.usuario.telefone = telefone;
    usuarioEncontrado.usuario.email = email;
    usuarioEncontrado.usuario.senha = senha;

    return res.status(200).json();
}

const deletarConta = (req, res) => {
    const { numeroConta } = req.params;

    const usuarioEncontrado = contas.find((conta) => {
        return conta.numero === Number(numeroConta);
    });

    if (usuarioEncontrado.saldo === 0) {
        const indice = contas.findIndex((conta) => {
            return conta.numero === Number(numeroConta);
        });

        contas.splice(indice, 1);
        idConta--;

        return res.status(201).json();
    } else {
        return res.status(401).json({ mensagem: 'A conta só pode ser removida se o saldo for zero.' });
    }
}

module.exports = { listarContasBancarias, cadastrarConta, atualizarConta, deletarConta }