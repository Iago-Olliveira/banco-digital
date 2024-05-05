const contaExiste = (req, res, next) => {
    const { numero_conta } = req.body;

    const usuarioEncontrado = contas.find((conta) => {
        return conta.numero === Number(numero_conta);
    });

    if (!usuarioEncontrado) {
        return res.status(400).json({ mensagem: 'Conta não encontrada!' });
    }

    next(usuarioEncontrado);
}

module.exports = { contaExiste }