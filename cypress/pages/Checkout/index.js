import { elements as ele} from "./element";

class Checkout {

    preencheCamposCorretosParaPagamento(firstName,lastName,zipCode){
        cy.get(ele.fieldFirstName).type(firstName)
        cy.get(ele.fieldLastName).type(lastName)
        cy.get(ele.fieldZipCode).type(zipCode)
        cy.get(ele.continueButton).click()
    }

   naoPreencheDadosParaPagamento(){
        cy.get(ele.continueButton).click()
        cy.get(ele.errorButton)
        .should('be.visible')
        .and('contains.text', 'Error: First Name is required')

    }

    verificaValorTotalCarrinho() {
        return new Cypress.Promise((resolve) => {
          let total = 0;
          
          cy.get(".inventory_item_price").each(($el) => {
            const precoTexto = $el.text();
            const precoNumerico = parseFloat(precoTexto.replace(/[^\d.,]/g, '').replace(',', '.'));
            total += precoNumerico;
          }).then(() => {
            resolve(total);
          });
        });
    }     

    finalizaCheckout(){
        cy.get(ele.finishButton).click();
    }

    verificaQueCompraFoiConcluidaComSucesso(){
        //verifica as duas mensagens de sucesso ao finalizar a compra
        cy.get(ele.completeTextOrder).should('contain.text', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!');
        cy.get(ele.finishOrderText).should('contain.text', 'Thank you for your order!');
    }

    validaQueAPaginaEoCheckoutStepOne(){
      cy.url().should('eq','https://www.saucedemo.com/checkout-step-one.html');
    }

    validaQueApaginaEoCheckoutStepDois(){
      cy.url().should('eq','https://www.saucedemo.com/checkout-step-two.html');
    }
}

export default new Checkout()