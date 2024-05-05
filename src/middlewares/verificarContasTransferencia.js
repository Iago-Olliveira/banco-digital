const verificarContasTransferencia = (req, res, next) => {
    const { numero_conta_destino, numero_conta_origem } = req.body;

    if (!numero_conta_origem || !numero_conta_destino) {
        return res.status(400).json({ mensagem: 'O número da conta de origem/destino é obrigatório!' });
    }

    next();
}

module.exports = { verificarContasTransferencia }