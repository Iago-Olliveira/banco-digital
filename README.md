# API Padrão para Banco Digital

<h4 align="center"> 
	🚧 Banco Digital 🚧
</h4>

<p align="center">
	<img alt="Status Concluído" src="https://img.shields.io/badge/STATUS-CONCLU%C3%8DDO-brightgreen">
</p>

## 💻 Sobre o projeto

Projeto desenvolvido durante a **[DDST16 | Módulo 02]** de [ [Desenvolvimento de Software](https://cubos.academy/cursos/desenvolvimento-de-software-v2)] oferecida pela [Cubos Academy](https://cubos.academy/).

Esse é um modelo de projeto piloto destinado para a aplicação de um sistema bancário simples. Contém operações para cadastro de usuários, depósitos, saques, transferências, além de poder consultar saldos e emitir extrato bancário da conta do usuário.

---

## ⚙️ Funcionalidades

- [x] Listar conta bancária:
  - [x] Endpoint GET: /contas?senha_banco=Cubos123Bank
- [x] Cadastrar conta bancária:
  - [x] Endpoint POST: /contas
- [x] Atualizar os dados do usuário da conta bancária:
  - [x] Endpoint PUT: /contas/:numeroConta/usuario
- [x] Excluir conta bancária:
  - [x] Endpoint DELETE: /contas/:numeroConta
- [x] Depositar:
  - [x] Endpoint POST: /transacoes/depositar
- [x] Sacar:
  - [x] Endpoint POST: /transacoes/sacar
- [x] Transferir:
  - [x] Endpoint POST: /transacoes/transferir
- [x] Consultar Saldo:
  - [x] Endpoint GET: /contas/saldo?numero_conta=123&senha=123
- [x] Emitir Extrato da conta bancária:
  - [x] Endpoint GET: /contas/extrato?numero_conta=123&senha=123

---

## 🎨 Layout

O layout da aplicação está disponível no Figma:

<a href="https://www.figma.com/files/project/77994470/%F0%9F%93%84-Templates-para-Projetos%2C-Eventos-e-Cursos?fuid=1110596132085818429">
  <img alt="Made by Cubos Academy" src="https://img.shields.io/badge/Acessar%20Layout%20-Figma-%2304D361">
</a>

---

## 🛣️ Como executar o projeto

Este projeto foi desenvolvido para:
1. Backend

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

#### 🎲 Rodando o Backend (servidor)

```bash

# Clone este repositório
$ git clone git@github.com:Iago-Olliveira/banco-digital.git

# Acesse a pasta do projeto no terminal/cmd
$ cd src

# Instale as dependências
$ npm install express
$ npm install -D nodemon

# Execute a aplicação em modo de desenvolvimento
$ npm run dev:server

# O servidor inciará na porta:3000 - acesse http://localhost:3000 

```
<p align="center">
  <a href="https://github.com/cubos-academy/academy-template-readme-projects" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### [](https://github.com/cubos-academy/academy-template-readme-projects#server-nodejs--typescript)**Server**  ([NodeJS](https://nodejs.org/en/))

-   **[Express](https://expressjs.com/)**

#### [](https://github.com/cubos-academy/academy-template-readme-projects#utilit%C3%A1rios)**Utilitários**

-   Editor:  **[Visual Studio Code](https://code.visualstudio.com/)**
-   Teste de API:  **[Insomnia](https://insomnia.rest/)**


---

## 💪 Como contribuir para o projeto

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`
> Caso tenha alguma dúvida confira este [guia de como contribuir no GitHub](./CONTRIBUTING.md)

---

## 🧙‍♂️ Autor

#### Iago Alves da Silva Oliveira

---

## 📝 Licença

<!-- Este projeto esta sobe a licença [MIT](./LICENSE). -->

Feito com ❤️ por Caio Lopes 👋🏽 [Entre em contato!](https://www.linkedin.com/in/caiovslopes/)

