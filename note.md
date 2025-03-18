## 1. WHat are the technologies we will use?

- NextJs
- Database - Postgresql (Open source relatinal DB)
- TypeORM - ORM for interacting with Database
- TypeScript

## 2. What we will be implementing?

- demo: https://demo.realworld.io/#/
- we will not build the frontend but we will use the existing frontend code from the source above
- we will only build the backend using nestJS

## 3. Prerequisites

- NodeJS
- Follow nest installation guide from: https://docs.nestjs.com/

## 4. Module, controllers and providers

- A module is a class that is annotated with the @Module() decorator. This decorator provides metadata that Nest uses to organize and manage the application structure efficiently.
- Controllers are responsible for handling incoming requests and sending responses back to the client.
- Providers are a core concept in Nest. Many of the basic Nest classes, such as services, repositories, factories, and helpers, can be treated as providers. The key idea behind a provider is that it can be injected as a dependency, allowing objects to form various relationships with each other. The responsibility of "wiring up" these objects is largely handled by the Nest runtime system.

## 5. Build Tab Module

## 6. Create Tag Service

## 7. Configuring absolute path and the start script

- use module-alias package for supporting absolute path for javascript
- Configure paths in tsconfig.json file for supporting absolute path
- ts-note is a TypeScript excution engine and REPL for Node.js
- tsconfig-paths Use this to load modules whose location is specified in the paths section of tsconfig.json
- use nodemon package for using watch mode while starting server

## 8. Postgres setup

- why postgres ? a relation db ? and not document based db?
- because MongoDB does not have schema by default. Although relations b/w documents can be built with mongo, still need some additional efforts but with postgres, it is very easy to build relation b/w tables.
- why postgres? why not other db like MySQL?
- MySQL is also a good choice but Postgres is more advanced and has more features than MySQL. MySQL is more suitable for small scale applications

- commands:
  - `psql -U postgres`: login to postgres
  - `\l` : list all database
  - `\c <db_name>`: connect to a database
  - `\dt`: list all tables in the database
  - `create database <db_name>` : create database
  - `\q`: quit
- commands i followed:

  - create database: `create database mediumclone;`
  - create user: `create user mediumclone with encrypted password 'mediumclone';`
  - grant primileges: `grant all privileges on database mediumclone to mediumclone;`

- check if the privileges are granted: `\l`

## 9. DB connection in NestJS

- `pnpm add @nestjs/typeorm typeorm pg`
- We will use https://typeorm.io/ for interactin with postgresql
