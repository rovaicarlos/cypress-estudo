import { elements as ele} from "./element";

class Checkout {

    preencheCamposParaPagamento(firstName,lastName,zipCode){
        cy.get(ele.fieldFirstName).type(firstName)
        cy.get(ele.fieldLastName).type(lastName)
        cy.get(ele.fieldZipCode).type(zipCode)
        cy.get(ele.continueButton).click()
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
}

export default new Checkout()