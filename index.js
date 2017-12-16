
const ApiBuilder = require('claudia-api-builder');
const AWS = require('aws-sdk');
const users = require('./users.json');

let api = new ApiBuilder();

api.get('/users', (request) => { 
  return new api.ApiResponse(users, {'X-Version': '200', 'Content-Type': 'application/json'}, 200);
});

module.exports = api;