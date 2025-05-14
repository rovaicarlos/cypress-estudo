// @ts-nocheck
const { faker } = require("@faker-js/faker");

const urlAPI = "http://localhost:3000";
let userId;
let BearerToken;
let email;
let senha;

before(() => {
  const userData = {
    nome: faker.person.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    administrador: "true",
  };

  cy.request({
    method: "POST",
    url: `${urlAPI}/usuarios`,
    body: userData,
  }).then((response) => {
    userId = response.body._id;
    email = userData.email;
    senha = userData.password;

    cy.api_login(email, senha).then((loginResponse) => {
      BearerToken = loginResponse.body.authorization;
    });
  });
});

describe("API - Teste funcional de Carrinho", () => {

  it("GET - Lista um usuario especifico passando um ID", () => {
       cy.request({
        method: 'GET',
        url: `${urlAPI}/usuarios/${userId}`
    }).then((response) => {
        expect(response.status).to.equal(200)
        expect(response.body._id).to.be.equal(userId)
        })
    })

  it("POST - Cadastra um novo usuario novo do tipo administrador", () => {
    // Armazena os valores ANTES de fazer a requisição
    const userData = {
      nome: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      administrador: "true",
    };

    cy.request({
      method: "POST",
      url: `${urlAPI}/usuarios`,
      body: userData,
    }).then((response) => {
      expect(response.status).to.equal(201);
      expect(response.body.message).contains("Cadastro realizado com sucesso");
      expect(response.body).to.have.property("_id");

      userId = response.body._id;
      email = userData.email; 
      senha = userData.password; 
    });
  });

  it("POST - Deve realizar login com sucesso para obter token de autorização", () => {
    cy.api_login(email, senha).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.message).to.equal("Login realizado com sucesso");
      BearerToken = response.body.authorization;
      cy.log(BearerToken)
    });
  });

  it("DELETE - Deve excluir um usuário passando um ID e que não tenha um carrinho", () => {
    cy.request({
      method: "DELETE",
      url: `${urlAPI}/usuarios/${userId}`,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.message).contains("Registro excluído com sucesso");
    });
  });

  it.skip("DELETE - Não deve excluir um usuário passando um ID que possua carrinho ativo", () => {
  cy.log(BearerToken)
    cy.request({
      method: "POST",
      url: `${urlAPI}/carrinhos`,
      headers: {
        Authorization: BearerToken,
      },
      body: {
        produtos: [
          {
            idProduto: "0jCiftZKsOkoTASe",
            quantidade: 1,
          },
          {
            idProduto: "0LxEWZl2I45s4LlT",
            quantidade: 1,
          },
        ],
      },
    }).then((response) => {
      expect(response.status).to.equal(201);
      expect(response.body.message).contains("Cadastro realizado com sucesso");
    });

    //Tenta deletar esse usuário com carrinho e não deve excluir
    cy.request({
      method: "DELETE",
      url: `${urlAPI}/usuarios/${userId}`,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(401);
      expect(response.body.message).contains("Não é permitido excluir usuário com carrinho cadastrado");
    });
  });
});
