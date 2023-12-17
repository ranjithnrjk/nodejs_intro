const { dir } = require('console');
const uuid = require('uuid');

console.log(uuid.v4());
console.log(uuid.v1());
console.log(dir(uuid));
console.log('Hello from Node.js!');