const validarSenha = (req, res, next) => {
    const { senha_banco } = req.query;

    if (!senha_banco) {
        return res.status(400).json({ mensagem: 'A senha do banco informada é inválida!' });
    }

    senha_banco === 'Cubos123Bank' ? next() : res.status(401).json({ mensagem: 'Senha Incorreta. Tente novamente.' });
}

module.exports = { validarSenha }