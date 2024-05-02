let { contas, idConta } = require('../dados/bancodedados');

const listarContasBancarias = (req, res) => {
    return res.status(200).json(contas);
}

const cadastrarContaBancaria = (req, res) => {
    const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;

    if (!nome) {
        return res.status(400).json({ mensagem: 'O nome é OBRIGATÓRIO!' });
    } else if (!cpf) {
        return res.status(400).json({ mensagem: 'O CPF é OBRIGATÓRIO!' });
    } else if (!data_nascimento) {
        return res.status(400).json({ mensagem: 'A data de nascimento é OBRIGATÓRIA!' });
    } else if (!telefone) {
        return res.status(400).json({ mensagem: 'O telefone é OBRIGATÓRIO!' });
    } else if (!email) {
        return res.status(400).json({ mensagem: 'O e-mail é OBRIGATÓRIO!' });
    } else if (!senha) {
        return res.status(400).json({ mensagem: 'A senha é OBRIGATÓRIA!' });
    }

    const encontrarCpf = contas.find((conta) => {
        return conta.usuario.cpf.includes(cpf);
    });

    const encontrarEmail = contas.find((conta) => {
        return conta.usuario.email.includes(email);
    });

    if (cpf.length !== 11) {
        return res.status(400).json({ mensagem: 'O CPF informado não contêm 11 digitos.' });
    }

    if (encontrarCpf || encontrarEmail) {
        return res.status(400).json({ mensagem: 'Já existe uma conta com CPF ou E-MAIL informado!' });
    }

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

module.exports = {
    listarContasBancarias,
    cadastrarContaBancaria
}