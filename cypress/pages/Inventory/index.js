import {elements as ele} from './element'

class Inventory {

    validarAcessoPagina() {
        cy.url().should('eq','https://www.saucedemo.com/inventory.html');
        
    }

    adicionarProduto(itemName){
        cy.get(ele.addToCart(itemName)).click()
    }

    removerProduto(itemName){
        cy.get(ele.removeFromCart(itemName)).click()  
    }

    vaiAtePaginaDoCarrinho(){
        cy.get(ele.iconCart).click()
        
    }
}

export default new Inventory();