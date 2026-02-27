# Testes _end-to-end_ com Cypress

Projeto exemplo para demonstrar testes de ponta a ponta (e2e) com Cypress e executados em um serviço de CI.

## Clonando e executando em sua máquina

### Pré-requisito:

Para rodar esse projeto você vai precisar:

![Node.js](https://img.shields.io/badge/Node.js-v16.16.0-black?logo=node.js&style=flat&logoColor=5FA04E)
![Yarn](https://img.shields.io/badge/Yarn-v1.22.19-black?logo=yarn&style=flat&logoColor=2C8EBB)
![Cypress](https://img.shields.io/badge/Cypress-v10.3.1-black?logo=cypress&style=flat&logoColor=69D3A7)
![Git](https://img.shields.io/badge/Git-v2.51.0-black?logo=git&style=flat&logoColor=F05032)

---

#### - **Node.js**

Você encontra em: https://nodejs.org/pt-br/download

#### - **Yarn**

Você encontra em: https://classic.yarnpkg.com/en/docs/install

#### - **Visual Studio Code** _(ou editor de sua prefrência)_

Você encontra em: https://code.visualstudio.com/download

#### - **Git**

Você encontra em: https://git-scm.com/install

---

#### ⬇️ Clonando o projeto

Via terminal, rode os seguintes comandos:

```Shell
git clone https://github.com/joaowillianspejo/testes-e2e-com-cypress-tat.git
```

```Shell
cd testes-e2e-com-cypress-tat
```

#### 📦 Para instalar as dependencias:

Via terminal, na pasta do projeto, rode os seguintes comandos:

##### Using Yarn

```Shell
yarn install
```

##### Using NPM

```Shell
npm install
```

#### ⚙️ Configurar variáveis do ambiente:

Antes de rodar os testes, alguma variáveis de ambiente precisam serem configuradas:

Faça uma cópia do [`cypress.env.example.json`](./cypress.env.example.json) e renomeie para `cypress.env.json`, em seguida preenchar as variáveis com os valores apropriados.

>**Nota:** O arquivo `cypress.env.json` não é versionado no git.

### Testes:

Neste projeto, você pode executar testes nos modos Interativo e em Headless, tanto em telas de desktop quanto em tablets.

Em um novo terminal, na pasta do projeto, rode os seguintes comandos:

---
#### 🧪 Modo Headless

#### 💻 Desktop

Para rodar os testes em proporção de tela de um desktop.

##### Usando Yarn

```Shell
yarn test
```

##### Using NPM

```Shell
npm test
```

#### 📱 Tablet

Para rodar os testes em proporção de tela de um tablet.

##### Usando Yarn

```Shell
yarn test:tablet
```

##### Using NPM

```Shell
npm run test:tablet
```
---
#### 🧪 Modo Interativo

#### 💻 Desktop

Para rodar os testes em proporção de tela de um desktop.

##### Usando Yarn

```Shell
yarn cy:open
```

##### Using NPM

```Shell
npm run cy:open
```

#### 📱 Tablet

Para rodar os testes em proporção de tela de um tablet.

##### Usando Yarn

```Shell
yarn cy:open:tablet
```

##### Using NPM

```Shell
npm run cy:open:tablet
```

---

Made with ❤️ by [João Willian](https://github.com/joaowillianspejo).
