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
  baseUrl: process.env.URL || 'https://www.saucedemo.com', // Compatibilidade com ambos
  env: {
    username: process.env.USUARIO || 'standard_user', // Usa USUARIO (GitHub) ou USER (local)
    password: process.env.SENHA || 'secret_sauce' // Usa SENHA (GitHub) ou PASSWORD (local)
  }
}

module.exports = defineConfig({
  ...baseConfig,
  e2e
})