# LinkIt

[![wakatime](https://wakatime.com/badge/github/tejaswankalluri/LinkIt-Backend.svg)](https://wakatime.com/badge/github/tejaswankalluri/LinkIt-Backend)
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

**Client:** React, Redux, TailwindCSS

**Server:** Node, Express, Typescript

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

## Still API's in Devlopement 🧑‍💻

## License

[MIT](https://choosealicense.com/licenses/mit/)
