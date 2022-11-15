# LinkIt

## Main focus on LinkIt

Linkit manages muliple links of the users as a one page link. This is similar to the
[Linktree](https://linktr.ee)

---

![App logo](https://raw.githubusercontent.com/tejaswankalluri/LinkIt-Backend/main/docs/logos/desktop.svg)

## Main Features

-   Users can create an account

-   Users can add the links in the admin panel

-   The user will get a shorten link that can be shared anywhere

## Tech Stack

**Client:** Next.js, TailwindCSS - [LinkIt-Frontend](https://github.com/tejaswankalluri/LinkIt-Frontend)

**Server:** Node, Express, Typescript, PostgreSQL

## Installations

-   First clone this repo

-   Install node in your pc (**version 16**) [Node.js download](https://nodejs.org/)

-   Install yarn

    `npm install -g yarn`

-   Type 👇 in terminal

    `cd LinkIt-Backend`

-   Create .env and add env from .env.example

-   `yarn install`

-   Create a postgres database - linkit

-   To create tables and schema on the database

    `npx prisma db push`

-   Type 👇 in terminal to start server

    `yarn dev`

## Running on Docker

All the services needed in the project is already provided on `docker-compose.yml` file

-   Create the `.env` file copy the text from `.env.example` and fill all the variables

-   Make sure docker is installed on your system

-   run the application

    `docker-compose --build -d`

-   go to `http://localhost:8000` that's it.

## API Reference

#### Login User

```http
  Post /api/login
```

| Parameter  | Type     | Description                 |
| :--------- | :------- | :-------------------------- |
| `email`    | `string` | **Required**. Your email    |
| `password` | `string` | **Required**. Your password |

#### Register User

```http
  Post /api/signup
```

| Parameter               | Type     | Description                        |
| :---------------------- | :------- | :--------------------------------- |
| `username`              | `string` | **Required**. username of the user |
| `email`                 | `string` | **Required**. email of the user    |
| `password`              | `string` | **Required**. pasword of the user  |
| `password_confirmation` | `string` | **Required**. for confirmation     |

## For more Api's

```http
  Get /api-docs
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
