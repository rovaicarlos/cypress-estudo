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
  baseUrl: process.env.URL || process.env.BASE_URL, // Compatibilidade com ambos
  env: {
    username: process.env.USUARIO || process.env.USER, // Usa USUARIO (GitHub) ou USER (local)
    password: process.env.SENHA || process.env.PASSWORD // Usa SENHA (GitHub) ou PASSWORD (local)
  }
}

  console.log('Variáveis carregadas:', 
  {
    URL: process.env.URL,
    USUARIO: process.env.USUARIO,
    SENHA: process.env.SENHA
  })
  
module.exports = defineConfig({
  ...baseConfig,
  e2e
})