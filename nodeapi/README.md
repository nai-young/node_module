<h1 align="center">Welcome to nodeapi 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/nodeapi" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/nodeapi.svg">
  </a>
</p>

## Install

```sh
npm install
```
## Load initial data

Load database with initial data

```sh
  npm run init_db
```
**Warning! This script delete database content before load**

## Usage

```sh
npm start
```

## Run local mongodb instance for development

```sh
./bin/mongod --dbpath ./data/db --directoryperdb
```

## Development Start

```sh
npm run dev
```

## API methods

### List of agents

GET /api/agentes

[
  {
    "_id": "5f520e0f6529250532ac527f",
    "name": "Smith",
    "age": 30,
    "__v": 0
  },
  {
    "_id": "5f520e0f6529250532ac5280",
    "name": "Brown",
    "age": 45,
    "__v": 0
  }
]

#### Example filters:

* http://localhost:3000/api/agentes?name=Smith
* http://localhost:3000/api/agentes?age=30
* http://localhost:3000/api/agentes?limit=2
* http://localhost:3000/api/agentes?skip=5&limit=10
* http://localhost:3000/api/agentes?sort=age

### Retrieves one agent

GET /api/agentes/<_id>

{
  "result": {
    "_id": "5f520e0f6529250532ac5280",
    "name": "Brown",
    "age": 45,
    "__v": 0
  }
}

### Creates new agent

POST /api/agentes 

{ name: 'Example', age: 50 }

{
  "result": {
      "_id": "5f536e4c6ec21f076e396419",
      "name": "David",
      "age": 50,
      "__v": 0
  }
}

### Update agent

PUT /api/agentes/<_id>

{ name: 'Example', age: 32 }

### Delete agent

DELETE /api/agentes/<_id>

## Author

👤 **Naiche**

* Website: naicheyoung.com
* Github: [@nai-young](https://github.com/nai-young)

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_