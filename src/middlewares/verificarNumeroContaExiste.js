const numeroContaExiste = (req, res, next) => {
    const { numero_conta } = req.body;

    if (!numero_conta) {
        return res.status(400).json({ mensagem: 'O número da conta é obrigatório!' });
    }

    next()
}

module.exports = { numeroContaExiste }