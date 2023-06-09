# Getting Started

## Description

Inventory App - created for dev test at [Rimba House](https://rimbahouse.com/)

## Tech Stack

- [Node.js](https://nodejs.org/en)
- [Express JS](https://expressjs.com/)
- [Knex.js](https://knexjs.org/)
- [MySQL](https://www.mysql.com/) - 10.4.17-MariaDB

## Quick Start

- Clone the Project

```bash
  git clone https://github.com/hafizulf/rimba_inventory
```

- Copy and Setup `.env`

```bash
cd rimba_inventory
cp .env.example .env
```

- Install app dependencies

```bash
  npm install
```

- Database Migrations

```bash
  # migrate database
  npm run migrate
```

- Running Application

```bash
  # running app
  npm run start

  # running with nodemon
  npm run dev
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
