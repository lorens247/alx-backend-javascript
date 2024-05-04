#   0x05. NodeJS Basics

![img](https://assets.imaginablefutures.com/media/images/ALX_Logo.max-200x150.png)

![can I haz ](https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2020/1/82692897e15d9f03256f.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20240504%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240504T033311Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=f16ccd5158e0453d80bbc19df477f0dba6dcee217b7057a639074d510641ea90)

This repository contains examples of various Node.js functionalities, including running JavaScript, using Node.js modules, reading files, accessing command-line arguments and environment variables, creating HTTP servers with Node.js and Express.js, creating advanced routes with Express.js, using ES6 with Node.js via Babel-node, and using Nodemon for faster development.

## Running JavaScript using Node.js

To run a JavaScript file using Node.js, simply execute the following command in your terminal:

```bash
node your_script.js

// hello_world.js
console.log("Hello, world!");
```

##  Using Node.js Modules

Node.js provides a module system for organizing code. You can use built-in modules or create your own. Here's an example of using a built-in module:

```
// Using the 'fs' module to read a file
const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});
```
##  Accessing Command Line Arguments and Environment with process

Node.js provides the process global object to access command-line arguments and environment variables.

```
// Accessing command line arguments
console.log(process.argv);

// Accessing environment variables
console.log(process.env.PORT);
```
##  Creating a Small HTTP Server using Node.js

Here's an example of creating a simple HTTP server using Node.js:

```
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, World!\n');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
```
##  Creating a Small HTTP Server using Express.js

Express.js is a web application framework for Node.js. Here's an example of creating a simple HTTP server using Express.js:

```
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
```
##  Creating Advanced Routes with Express.js

Express.js allows defining routes with different HTTP methods and parameters. Here's an example of creating advanced routes with Express.js:

```
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Home Page');
});

app.get('/users/:userId', (req, res) => {
    res.send(`User ID: ${req.params.userId}`);
});

app.post('/users', (req, res) => {
    res.send('Creating a new user');
});

app.put('/users/:userId', (req, res) => {
    res.send(`Updating user with ID: ${req.params.userId}`);
});

app.delete('/users/:userId', (req, res) => {
    res.send(`Deleting user with ID: ${req.params.userId}`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
```
Using ES6 with Node.js with Babel-node

Babel is a JavaScript compiler that allows using the latest JavaScript features in Node.js. Here's how to use ES6 with Node.js using Babel:

-   Install Babel and required presets:
```
npm install @babel/core @babel/node @babel/preset-env --save-dev
```
-   Create a .babelrc file:
```
{
  "presets": ["@babel/preset-env"]
}
```
-   Run your script using babel-node:
```
npx babel-node your_script.js
```
##  Using Nodemon for Faster Development

Nodemon is a utility that monitors changes in your Node.js application and automatically restarts the server. It's useful for faster development. Here's how to use Nodemon:

-   Install Nodemon globally:
```
npm install -g nodemon
```

-   Run your script using Nodemon:
```
nodemon your_script.js
```

## Resources
*Read or watch*:

1. [Node JS getting started](https://nodejs.org/en/docs/guides/getting-started-guide)
2. [Process API docs](https://node.readthedocs.io/en/latest/api/process/)
3. [Child process](https://nodejs.org/api/child_process.html)
4. [Express getting started](https://expressjs.com/en/starter/installing.html)
5. [Mocha documentation](https://mochajs.org/)
6. [Nodemon documentation]()
