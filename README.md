[![license](https://img.shields.io/github/license/DAVFoundation/captain-n3m0.svg?style=flat-square)](https://github.com/matheusicaro/template-nodejs-app/blob/main/LICENSE)

---

<br>

# TEMPLATE: GraphQL/typescript-and-apollo-server

<br>

## Project Specifications

#### BACK-END

- Used **[Node.js](https://nodejs.org/en/)** with:
  - **[TypeScript](https://www.typescriptlang.org/)**
  - **[Express](https://expressjs.com/)**
- Used **[Jest](https://jestjs.io/)** for unit testing
- Used **[Winston](https://typicode.github.io/husky/#/)** for the storage of the logs.

<br>

## Installation and Setup Instructions

> You will need `node` and `npm` installed globally on your machine.

1. clone the repository: <br>
```
git clone -b GraphQL/typescript-and-apollo-server https://github.com/matheusicaro/template-nodejs-app template-nodejs-GraphQL/typescript-and-apollo-server

```
4. Installation: `npm install`
5. To Start Server: `npm start`
6. To Visit App: `http://localhost:4000/`

<br>

## Folder Structure

```
-- src/config ___________________________: layer for configurations of essential services such as logger, environment, database, etc.
-- src/api/grapgql ______________________: layer for GraphQL configurations
-- src/api/grapgql/schema _______________: layer for resovers and typedefs by domain context
-- src/api/integration __________________: layer for business rules for search abstractions in integrations with external services (external services api, database, etc.)
-- src/api/services _____________________: layer for business rules that responds to requests.
-- src/tests ____________________________: application unit tests
```

<br>
