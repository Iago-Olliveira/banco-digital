const validarDadosCadastrais = (req, res, next) => {
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

    next();
}

module.exports = { validarDadosCadastrais }