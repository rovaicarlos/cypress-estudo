const { defineConfig } = require("cypress")
const baseConfig = require('./cypress.config');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
    path: path.resolve(__dirname,'./.env.dev')
})

const e2e = {
    baseUrl: process.env.BASE_URL, // Adicione isso também
    env: {
        username: process.env.USER_DEV, // Corrigido para USER_DEV
        password: process.env.PASSWORD_DEV // Corrigido para PASSWORD_DEV
    }
}

module.exports = defineConfig({
    ...baseConfig,
    e2e
})