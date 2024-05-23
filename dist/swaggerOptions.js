"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.options = void 0;
// import dotenv from 'dotenv';
// dotenv.config();
// console.log(process.env.PORT);
var options = exports.options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Express API with Swagger',
      version: '1.0.0',
      description: 'A sample API with Swagger documentation'
    },
    servers: [{
      url: "http://localhost:".concat(process.env.PORT)
    }],
    tags: [{
      name: 'authentication',
      description: 'Operations about user authentication'
    }]
  },
  apis: ['./routes/*.js'],
  // Path to the API routes
  HOST: ["localhost:".concat(process.env.PORT)]
};