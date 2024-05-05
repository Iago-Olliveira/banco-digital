const valorExiste = (req, res, next) => {
    const { valor } = req.body;

    if (!valor) {
        return res.status(400).json({ mensagem: 'O valor da transação é obrigatório!' });
    }

    next()
}

module.exports = { valorExiste }