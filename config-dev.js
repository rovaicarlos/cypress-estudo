const { defineConfig } = require("cypress")
const baseConfig = require('./cypress.config');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
    path: path.resolve(__dirname,'./.env.dev')
})

const e2e = {
        baseUrl: process.env.BASE_URL || Cypress.env('BASE_URL'),
        env: {
          username: process.env.USERNAME_DEV || Cypress.env('USERNAME_DEV'),
          password: process.env.PASSWORD_DEV || Cypress.env('PASSWORD_DEV')
        }
}

module.exports = defineConfig({
    ...baseConfig,
    e2e
})