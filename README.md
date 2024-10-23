
# ✈️ Traveler

O  Traveler é um aplicativo mobile que  foi criado com o intuito de solucionar os desafios enfrentados  por pessoas que precisam organizar  e planejar  viagens de maneira prática.

A plataforma foi pensada para garantir que os viajantes tenham total controle sobre todos os detalhes de suas viagens, permitindo que gerenciem tudo de forma simples e eficiente, seja para viagens a negócios ou lazer.

Esta documentação é referente a API, para conferir o aplicativo acesse:
https://github.com/gabrielpedutti/Traveler

## 🌐 Stack utilizada

**Front-end:** React Native, Typescript, CSS

**Back-end:** Node, Express, Prisma

**Database:** PostgreSQL

## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`DATABASE_URL`

## 🧑‍💻 Configurando o projeto


### Node

Clone o projeto

```bash
  git clone https://link-para-o-projeto
```

Entre no diretório do projeto

```bash
  cd my-project
```

Instale as dependências

```bash
  npm install
```

Inicie

```bash
  npm run start
```

### Prisma

- Para gerar o client:

```bash
  npx prisma generate
```

- Para realizar um novo migrate:

```bash
  npx prisma migrate deploy
```

- Para visualizar o banco:

```bash
  npx prisma studio
```

    
## ☁️ Infraestrutura atual

- **API:** hospedada no Render.

- **Banco de dados:** hospedado no Render.

- **Manipulação direta do Banco de dados:** é feita por meio do Bytebase, uma ferramenta que facilita uma governança eficiente e centralizada.


### Build & Deploy

A API deste projeto roda através do Render na cloud, o que possibilita que o deploy seja realizado a cada atualização no Github.

Os comandos executados são:

```bash
  npm install && npx prisma generate
```

```bash
  npm run start
```
## Documentação da API

### Cria um novo usuário

```http
  POST /usuarios
```

| Parâmetro     | Tipo       | Descrição                            |
| :------------ | :--------- | :----------------------------------- |
| `nome`        | `string`   | **Obrigatório**. O nome do usuário   |
| `email`       | `string`   | **Obrigatório**. O email do usuário  |
| `senha`       | `string`   | **Obrigatório**. A senha do usuário  |

---

### Retorna todos os usuários

```http
  GET /usuarios
```

| Parâmetro   | Tipo       | Descrição                            |
| :---------- | :--------- | :----------------------------------- |
| `api_key`   | `string`   | **Obrigatório**. A chave da sua API  |

---

### Retorna um usuário pelo login

```http
  GET /usuarios/login
```

| Parâmetro     | Tipo       | Descrição                             |
| :------------ | :--------- | :------------------------------------ |
| `email`       | `string`   | **Obrigatório**. O email do usuário   |
| `senha`       | `string`   | **Obrigatório**. A senha do usuário   |

---

### Deleta um usuário

```http
  DELETE /usuarios/${id}/delete
```

| Parâmetro   | Tipo       | Descrição                                |
| :---------- | :--------- | :--------------------------------------- |
| `id`        | `string`   | **Obrigatório**. O ID do usuário a ser deletado |

---

### Atualiza um usuário

```http
  PUT /usuarios/${id}/update
```

| Parâmetro   | Tipo       | Descrição                                |
| :---------- | :--------- | :--------------------------------------- |
| `id`        | `string`   | **Obrigatório**. O ID do usuário a ser atualizado |
| `nome`      | `string`   | O novo nome do usuário                    |
| `email`     | `string`   | O novo email do usuário                   |
| `senha`     | `string`   | A nova senha do usuário                   |

---

## 🤷 FAQ

#### O que eu preciso instalar para rodar este projeto?

Você precisa ter Javascript, Node, React Native, Prisma e Express.
