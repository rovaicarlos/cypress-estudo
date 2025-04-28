const { defineConfig } = require('cypress')
const baseConfig = require('./cypress.config')
const dotenv = require('dotenv')
const path = require('path')

dotenv.config({
  path: path.join(__dirname, './.env.qa')
})

const e2e = {
  ...baseConfig.e2e,
  baseUrl: 'https://www.saucedemo.com',
  env: {
    username: process.env.USER,
    password: process.env.PASSWORD
  }
}

module.exports = defineConfig({
  ...baseConfig,
  e2e
})