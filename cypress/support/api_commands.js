// @ts-ignore
Cypress.Commands.add('api_login', (user, password) => {
    cy.request({
      method: "POST",
      url: "https://serverest.dev/login",
      body: {
        "email": user,
        "password": password
      },
      failOnStatusCode: false // Permite que o teste continue mesmo com status 400/500
    }).then((response) => {
      return response
    });
  });