### Teste técnico - Front end - Pleno - Casar.com

# Lista de repositórios do GitHub

## Descrição

Nesse projeto você deverá desenvolver um site simples em que seja possí­vel acessar a página de um usuário e visualizar seus repositórios públicos, além de poder favoritar/remover repositórios dos favoritos.

## Requisitos

- [x] Uma barra de pesquisa para procurar um usuário
- [x] Um feedback caso o usuário não seja encontrado
- [x] Uma página do usuário, mostrando suas informações e sua lista de repositórios
- [x] **NÃO OBRIGATÓRIO** A lista de repositórios deverá conter uma paginação com rolagem infinita, ou seja, mais repositórios serão carregados conforme o usuário rola a página para baixo até que não haja mais repositórios (estilo Facebook, Instagram, Twitter, etc.)
- [x] Possibilidade de favoritar e remover repositórios dos favoritos (utilizar algum gerenciador de estado)
- [x] Listar repositórios favoritos

## Obrigatório

- [x] Utilização de um framework/lib dentre esses: (Vue 3, Nuxt 3, React ou Next)
- [x] Typescript
- [x] Responsividade
- [x] Testes unitários (Jest ou Vitest), o máximo de cobertura que conseguir, mas no mí­nimo 1 unidade de teste, por exemplo: (Listagem de repositórios)
- [x] Clean code

**Sinta-se livre para adicionar qualquer outra tecnologia, desde que utilize as tecnologias obrigatórias.**

## Diferenciais

- [x] Tailwindcss
- [x] Commits padronizados

## Layout

Desenvolver o site baseado nesse [protótipo](https://www.figma.com/file/NPsgIQuNZEv46Jy9u1d90E/Processo-Seletivo?node-id=0%3A1).

## Informações úteis

#### Sobre a API do GitHub

A API do GitHub requer uma autenticação. Você deverá gerar um token de acesso pessoal no seu GitHub e utilizá-lo no projeto.
Caso não queira deixar o seu token visí­vel em seu repositório, disponibilize um guia em seu **README** sobre onde substituir o token.
Para mais detalhes sobre como gerar um token, acesse o [guia de autenticação do GitHub](https://docs.github.com/pt/rest/authentication/authenticating-to-the-rest-api?apiVersion=2022-11-28).

## Sobre a entrega

- Clone esse repositório (ou copie o README)
- Desenvolva seu projeto atualizando seu repositório
- Envie o link do seu repositório para **tech@casar.com**
  - Tí­tulo do e-mail: Teste técnico - {Seu nome completo}
  - Corpo do e-mail: Link do repositório
  - Opcional: Cover letter

## Links

[Documentação da API do GitHub](https://docs.github.com/pt/rest?apiVersion=2022-11-28)

# Desenvolvimento do projeto

### Tecnologias utilizadas

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/en/main/start/overview)
- [Typescript](https://www.typescriptlang.org/)
- [Tailwindcss](https://tailwindcss.com/)
- [Axios](https://axios-http.com/ptbr/)
- [React Query](https://tanstack.com/query/v3/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Vitest](https://vitest.dev/)
- [Testing Library](https://testing-library.com/)
- [Faker JS](https://fakerjs.dev/)

### Rodar o projeto

O projeto está hospedado e pronto pra uso em [repo-explorer-beige.vercel.app](https://repo-explorer-beige.vercel.app/), mas caso queira rodá-lo localmente, siga os próximos passos:

Antes de rodar o projeto, é preciso adicionar uma chave de acesso a api do github no arquivo `.env.local`, com o seguinte formato:
`VITE_GITHUB_API_TOKEN=<your_token>`

Agora você está apto a rodar o projeto com o seu gerenciador de pacotes,
primeiro clone este repositório e instale as dependências, e por fim poderá rodar o projeto com:

```sh
npm run dev
```

Ou

```sh
yarn dev
```

Apos isso o projeto estará rodando em `http://localhost:5173`

### Testes unitários

Também utilizei vitest para testes unitários, para rodar esses testes:

```sh
npm run test:unit
```

Ou

```sh
yarn test:unit
```
