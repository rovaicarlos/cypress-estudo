const { defineConfig } = require('cypress')
const baseConfig = require('./cypress.config')
const dotenv = require('dotenv')
const path = require('path')

// Carrega variáveis do arquivo .env.dev (para ambiente local)
dotenv.config({
  path: path.join(__dirname, "./.env.dev"),
});

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.URL,
    env: {
      username: process.env.USUARIO, // Sem fallback!
      password: process.env.SENHA, // Sem fallback!
    },
  },
});
