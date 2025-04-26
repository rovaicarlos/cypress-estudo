import { elements as ele} from "./element";

class Login {

    visitarPagina() {
        cy.visit('https://www.saucedemo.com/');
    }

    validarAcessoPagina() {
      cy.url().should('eq','https://www.saucedemo.com/');
      
  }
    preencherCredenciasValidas() {
      cy.get(ele.username).type('standard_user');

      cy.get(ele.password).type('secret_sauce')

      cy.get(ele.loginButton).click()
    }

    preencherCredenciasInvalidas(){
      cy.get(ele.username).type('user.invalid')

      cy.get(ele.password).type('senha')

      cy.get(ele.loginButton).click()
    }

    validarErroCredenciaisInvalida(){
      cy.get(ele.errorMessage)
      .should(
      'contain.text',
      'Username and password do not match any user in this service'
      )
    }
}

export default new Login()