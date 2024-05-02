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

Este projeto é divido em três partes:
1. Backend (pasta server) 
2. Frontend (pasta web)
3. Mobile (pasta mobile)

💡Tanto o Frontend quanto o Mobile precisam que o Backend esteja sendo executado para funcionar.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

#### 🎲 Rodando o Backend (servidor)

```bash

# Clone este repositório
$ git clone git@github.com:cubos-academy/academy-template-readme-projects.git

# Acesse a pasta do projeto no terminal/cmd
$ cd academy-template-readme-projects

# Vá para a pasta server
$ cd server

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev:server

# O servidor inciará na porta:3333 - acesse http://localhost:3333 

```
<p align="center">
  <a href="https://github.com/cubos-academy/academy-template-readme-projects" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>


#### 🧭 Rodando a aplicação web (Frontend)

```bash

# Clone este repositório
$ git clone git@github.com:cubos-academy/academy-template-readme-projects.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd academy-template-readme-projects

# Vá para a pasta da aplicação Front End
$ cd web

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run start

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000

```

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Website**  ([React](https://reactjs.org/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[React Icons](https://react-icons.github.io/react-icons/)**
-   **[Axios](https://github.com/axios/axios)**

> Veja o arquivo  [package.json](https://github.com/cubos-academy/academy-template-readme-projects/blob/master/web/package.json)

#### [](https://github.com/cubos-academy/academy-template-readme-projects#server-nodejs--typescript)**Server**  ([NodeJS](https://nodejs.org/en/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[Express](https://expressjs.com/)**
-   **[CORS](https://expressjs.com/en/resources/middleware/cors.html)**
-   **[KnexJS](http://knexjs.org/)**
-   **[SQLite](https://github.com/mapbox/node-sqlite3)**
-   **[ts-node](https://github.com/TypeStrong/ts-node)**
-   **[dotENV](https://github.com/motdotla/dotenv)**

> Veja o arquivo  [package.json](https://github.com/cubos-academy/academy-template-readme-projects/blob/master/web/package.json)

#### [](https://github.com/cubos-academy/academy-template-readme-projects#mobile-flutter--typescript)**Mobile**  ([Flutter](https://flutter.dev/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[Flutter](https://flutter.dev/)**

> Veja o arquivo  [package.json](https://github.com/cubos-academy/academy-template-readme-projects/blob/master/mobile/package.json)

#### [](https://github.com/cubos-academy/academy-template-readme-projects#utilit%C3%A1rios)**Utilitários**

-   Protótipo:  **[Figma](https://www.figma.com/)**  →  **[Protótipo](https://www.figma.com/file/L4O2dxZzKKhEPspDgxzZ3a/Template-de-Capa-para-Projetos?type=design&node-id=0%3A1&t=zpQ8tnlNEfQtMeC8-1)**
-   API:  **[API](Link da API)**
-   Editor:  **[Visual Studio Code](https://code.visualstudio.com/)**  → Extensions:  **[SQLite](https://marketplace.visualstudio.com/items?itemName=alexcvzz.vscode-sqlite)**
-   Markdown:  **[StackEdit](https://stackedit.io/)**,  **[Markdown Emoji](https://gist.github.com/rxaviers/7360908)**
-   Commit Conventional:  **[Commitlint](https://github.com/conventional-changelog/commitlint)**
-   Teste de API:  **[Insomnia](https://insomnia.rest/)**
-   Ícones:  **[Feather Icons](https://feathericons.com/)**,  **[Font Awesome](https://fontawesome.com/)**
-   Fontes:  **[Ubuntu](https://fonts.google.com/specimen/Ubuntu)**,  **[Roboto](https://fonts.google.com/specimen/Roboto)**


---

## 👨‍💻 Contribuidores

Um praise para os cúbicos que contribuíram neste projeto 👏

<table>
  <tr>
    <td align="center"><a href="https://cubos.academy/"><img style="border-radius: 50%;" src="https://ca.slack-edge.com/T02BJRAJH6G-U02BMJ98N68-5e47f31c2a79-512" width="100px;" alt=""/><br /><sub><b>Guido Cerqueira</b></sub></a><br /><a href="https://cubos.academy/" title="Cubos Academy">👨‍💻</a></td>
    <td align="center"><a href="https://cubos.academy/"><img style="border-radius: 50%;" src="https://media.licdn.com/dms/image/D4E03AQG_0i4C04YeYg/profile-displayphoto-shrink_200_200/0/1677773908684?e=1688601600&v=beta&t=D1aefI0DMhoc7NZFvKUMn_LAIGEyEczyFaxUz0Auh6o" width="100px;" alt=""/><br /><sub><b>Daniel Lopes</b></sub></a><br /><a href="https://cubos.academy/" title="Cubos Academy">👨‍💻</a></td>
    <td align="center"><a href="https://cubos.academy/"><img style="border-radius: 50%;" src="https://media.licdn.com/dms/image/C4E03AQG1l_n_4-Bhsg/profile-displayphoto-shrink_200_200/0/1516624005627?e=1688601600&v=beta&t=5nA_EezcbJ068eNefrWeccM-FBUUBnmKWQ7frFCxG9U" width="100px;" alt=""/><br /><sub><b>Guilherme Bernal</b></sub></a><br /><a href="https://cubos.academy/" title="Cubos Academy">👨‍💻</a></td>
	 <td align="center"><a href="https://cubos.academy/"><img style="border-radius: 50%;" src="https://media.licdn.com/dms/image/C4E03AQGp3BsgWtthBg/profile-displayphoto-shrink_200_200/0/1643505110642?e=1688601600&v=beta&t=c_h3BkUr6POLelref_Nzc6AqzJpWTgENueNs9KqmvRM" width="100px;" alt=""/><br /><sub><b>Clara Battesini</b></sub></a><br /><a href="https://cubos.academy/" title="Cubos Academy">👩‍💻</a></td>
    
    
  </tr>
</table>

## 💪 Como contribuir para o projeto

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`
> Caso tenha alguma dúvida confira este [guia de como contribuir no GitHub](./CONTRIBUTING.md)

---

## 🧙‍♂️ Autor

<a href="https://www.figma.com/@caiux">
 <img style="border-radius: 50%;" src="https://media.licdn.com/dms/image/D4D03AQEDfulqSVXZqw/profile-displayphoto-shrink_200_200/0/1674667231041?e=1688601600&v=beta&t=C-f9fp3xJDwXm1u4c6eMwpWfVIyW0eCTDAKGIyNdRJA" width="100px;" alt=""/>
 <br />
 <sub><b>Caio Lopes</b></sub></a> <a href="https://www.figma.com/@caiux" title="Cubos Academy">✨</a>
 <br />

---

## 📝 Licença

<!-- Este projeto esta sobe a licença [MIT](./LICENSE). -->

Feito com ❤️ por Caio Lopes 👋🏽 [Entre em contato!](https://www.linkedin.com/in/caiovslopes/)

