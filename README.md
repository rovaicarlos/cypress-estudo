# Cypress Estudo

Repositório de aprendizado utilizando o Cypress utilizando o padrão de projeto Page Object Model (POM), também inclui exemplos de testes E2E (End-to-End) e testes de API.

## Tecnologias Utilizadas
- **Cypress**: Framework de testes E2E.
- **Faker.js**: Geração de dados fictícios para testes.
- **ServerRest**: Utilizado para realizar testes de API.

## Funcionalidades do Projeto
### Testes E2E
- Automação de login e fluxo de carrinho na [SauceDemo](https://www.saucedemo.com/).
- Validação de credenciais válidas e inválidas no Login.
- Adição e remoção de itens do carrinho.

### Testes de API
- Login via API utilizando [ServerRest](https://serverest.dev).
- Cadastro de produtos via API com dados gerados dinamicamente pelo ```Faker.js```.

### Page Object Model (POM)
- Organização do código utilizando o padrão de projeto POM, separando elementos da interface e ações em classes específicas.

### Integração Contínua
Este projeto utiliza GitHub Actions para executar os testes em cada push ou pull request na branch main. O workflow está configurado no arquivo ```.github/workflows/ci.yml``` onde é feito um teste para API e outro para o E2E.

## Estrutura do Projeto
Abaixo está uma breve descrição da estrutura do projeto:

## Configuração e Execução
### Pré-requisitos
- Node.js versão 18 ou superior.
- Cypress instalado globalmente ou localmente via `npm`.

### Instalação
1. Clone este repositório:
   ```bash
   git clone https://github.com/rovaicarlos/cypress-estudo.git

### Instale as dependências:
2. Clone este repositório:
   ```bash
   npm install

### Executando os Testes
1. Executa o Cypress(modo headless) e os testes E2E somente:
   ```bash
   npm run cy:run:dev

2. Executa o Cypress(modo headless) e os testes da API somente:
   ```bash
   npm run cy:run:api

### Relatórios
Os relatórios de teste são gerados automaticamente no diretório ```cypress/reports```.
