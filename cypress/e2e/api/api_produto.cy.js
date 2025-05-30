// @ts-nocheck
const { faker } = require('@faker-js/faker');

let bearerToken 
describe("API - Teste funcional de Produto", () => {

  it("POST - Deve realizar login com sucesso", () => {
    cy.api_login('beltrano@qa.com.br', 'teste').then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.message).to.equal("Login realizado com sucesso");
      bearerToken = response.body.authorization;
    });
  });

  it('POST - Deve cadastrar produto com sucesso' , () => {
    cy.request({
        method: 'POST',
        url: 'http://localhost:3000/produtos',
        headers:{
            authorization: bearerToken
        },
        body:{
                "nome": `${faker.commerce.product()} ${Date.now()}`,
                "preco": faker.number.int({ max: 500 }),
                "descricao": faker.commerce.productDescription(),
                "quantidade": faker.number.int({ max: 100 })
              }
    }).then((response) => {
        expect(response.status).to.equal(201)
        expect(response.body.message).to.equal('Cadastro realizado com sucesso')
    })
  })
});
