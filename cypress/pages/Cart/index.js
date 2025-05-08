import { elements as ele} from "./element";
class Cart{

    validarProdutoPresenteNoCarrinho(productName){
        cy.contains(productName).should('be.visible');
    }
    
    clicaNoBotaoCheckout(){
        cy.get(ele.checkoutButton).click()
    }
} 

export default new Cart()