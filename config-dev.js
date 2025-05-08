const { defineConfig } = require('cypress')
const baseConfig = require('./cypress.config')
const dotenv = require('dotenv')
const path = require('path')

// Carrega variáveis do arquivo .env.dev (para ambiente local)
dotenv.config({
  path: path.join(__dirname, './.env.dev')
})

// Configuração principal
const e2e = {
  baseUrl: process.env.URL || 'https://www.saucedemo.com',
  env: {
    username: process.env.USUARIO || 'standard_user', 
    userblocked: process.env.USERBLOCKED || 'locked_out_user',
    password: process.env.SENHA || 'secret_sauce' 
  }
}

module.exports = defineConfig({
  ...baseConfig,
  e2e
})