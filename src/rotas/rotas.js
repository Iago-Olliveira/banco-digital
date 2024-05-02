const express = require('express');
const autenticacao = require('../intermediarios/autenticacao');
const contas_bancarias = require('../controladores/contas_bancarias');
const atualizar_usuario = require('../controladores/atualizar_conta');
const deletar_conta = require('../controladores/deletar_conta');
const depositar = require('../controladores/depositar');
const sacar = require('../controladores/sacar');
const transferencia = require('../controladores/transferir');
const saldo = require('../controladores/saldo');
const extrato = require('../controladores/extrato');
//const { verificarContaExiste } = require('../intermediarios/verificarContaExiste');

const rotas = express();

rotas.get('/contas', autenticacao.validarSenha, contas_bancarias.listarContasBancarias);
rotas.post('/contas', contas_bancarias.cadastrarContaBancaria);
rotas.put('/contas/:numeroConta/usuario', atualizar_usuario.atualizarConta);
rotas.delete('/contas/:numeroConta', deletar_conta.deletarConta);
rotas.post('/transacoes/depositar', depositar.depositoEmConta);
rotas.post('/transacoes/sacar', sacar.saque);
rotas.post('/transacoes/transferir', transferencia.transferir);
rotas.get('/contas/saldo', saldo.saldoUsuario);
rotas.get('/contas/extrato', extrato.extratoBancario);

module.exports = rotas;