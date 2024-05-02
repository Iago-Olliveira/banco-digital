let { contas } = require('../dados/bancodedados');

const atualizarConta = (req, res) => {
    const { numeroConta } = req.params;
    const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;

    if (!numeroConta || !Number(numeroConta)) {
        return res.status(400).json({ mensagem: 'Número da Conta é Inválido!' });
    }

    const encontrarCpf = contas.find((conta) => {
        return conta.usuario.cpf.includes(cpf);
    });

    if (encontrarCpf) {
        return res.status(403).json({ mensagem: 'O CPF informado já existe cadastrado!' });
    }

    const encontrarEmail = contas.find((conta) => {
        return conta.usuario.email.includes(email);
    });

    if (encontrarEmail) {
        return res.status(403).json({ mensagem: 'O EMAIL informado já existe cadastrado!' });
    }

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

module.exports = { atualizarConta }