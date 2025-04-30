// @ts-nocheck

describe("API - Teste funcional de Login", () => {
  it("Deve realizar login com sucesso", () => {
     cy.api_login('fulano@qa.com','teste').then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body.message).to.equal("Login realizado com sucesso");
     })
  });

  it("Deve validar login com campos vazios", () => {
    cy.api_login('','').then((response) => {
      expect(response.status).to.equal(400);
      expect(response.body.email).to.equal("email não pode ficar em branco");
      expect(response.body.password).to.equal(
        "password não pode ficar em branco"
      );
    });
  });

  it("Deve validar login com email inválido", () => {
    cy.api_login('teste@ga','senha').then((response) => {
      expect(response.status).to.equal(400);
      expect(response.body.email).to.equal("email deve ser um email válido");
    });
  });

  it("Deve validar uma senha incorreta", () => {
    cy.api_login('beltrano@qa.com.br','asdasdasd').then((response) => {
      expect(response.status).to.equal(401);
      expect(response.body.message).to.equal("Email e/ou senha inválidos");
    });
  });
});
