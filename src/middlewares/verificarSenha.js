const verificarSenha = (req, res, next) => {
    const { senha } = req.body;

    if (!senha) {
        return res.status(400).json({ mensagem: 'A senha da conta é obrigatória!' });
    }

    next()
}

module.exports = { verificarSenha }