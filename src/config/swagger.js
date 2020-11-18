/**
 * @fileOverview generate swagger doc
 * @see https://github.com/Surnet/swagger-jsdoc
 */

const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Rocklab Service',
    version: '0.1.0',
    description: 'Rocklab Service API',
  },
  basePath: '/',
  produces: ['application/json'],
};

const options = {
  swaggerDefinition,
  apis: ['./src/routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
