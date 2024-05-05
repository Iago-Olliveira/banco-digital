const express = require('express');
const { validarSenha } = require('../middlewares/autenticacao');
const contaBancaria = require('../controllers/contaBancaria');
const transacoesBancarias = require('../controllers/transacoesBancarias');

const { validarDadosCadastrais } = require('../middlewares/validarDadosCadastrais');
const { validarCPF } = require('../middlewares/validarCPF');
const { validarEmail } = require('../middlewares/validarEmail');
const { validarNumeroConta } = require('../middlewares/validarNumeroConta');

const { numeroContaExiste } = require('../middlewares/verificarNumeroContaExiste')
const { valorExiste } = require('../middlewares/verificarValorExiste');
const { verificarSenha } = require('../middlewares/verificarSenha');
const { verificarContasTransferencia } = require('../middlewares/verificarContasTransferencia');

const rotas = express();

rotas.get('/contas', validarSenha, contaBancaria.listarContasBancarias);
rotas.post('/contas', validarDadosCadastrais, validarCPF, validarEmail, contaBancaria.cadastrarConta);
rotas.put('/contas/:numeroConta/usuario', validarNumeroConta, validarCPF, validarEmail, contaBancaria.atualizarConta);
rotas.delete('/contas/:numeroConta', validarNumeroConta, contaBancaria.deletarConta);

rotas.post('/transacoes/depositar', numeroContaExiste, valorExiste, transacoesBancarias.depositar);
rotas.post('/transacoes/sacar', numeroContaExiste, valorExiste, verificarSenha, transacoesBancarias.sacar);
rotas.post('/transacoes/transferir', verificarContasTransferencia, valorExiste, verificarSenha, transacoesBancarias.transferir);
rotas.get('/contas/saldo', transacoesBancarias.saldo);
rotas.get('/contas/extrato', transacoesBancarias.extrato);

module.exports = rotas;