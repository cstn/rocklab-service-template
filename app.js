require('@babel/register')({
  presets: ['@babel/preset-env'],
});

require('dotenv-safe').config({
  allowEmptyValues: true,
});

module.exports = require('./src/app');
