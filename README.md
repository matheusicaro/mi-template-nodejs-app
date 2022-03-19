[![license](https://img.shields.io/github/license/DAVFoundation/captain-n3m0.svg?style=flat-square)](https://github.com/matheusicaro/template-nodejs-app/blob/main/LICENSE)

---

<br>

# TEMPLATE: Nodejs/typescript-and-express

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
git clone -b Nodejs/typescript-and-express https://github.com/matheusicaro/template-nodejs-app template-Nodejs/typescript-and-express

```
4. Installation: `npm install`
5. To Start Server: `npm start`
6. To Visit App: `http://localhost:4000/`

<br>

## Folder Structure

```
-- src/config ___________________________: layer for configurations of essential services such as logger, environment, etc.
-- src/routes ___________________________: API routes
-- src/controllers ______________________: layer for controllers for handling requests
-- src/models ___________________________: layer for structured objects for runtime use
-- src/tests ____________________________: application unit tests
```

<br>
