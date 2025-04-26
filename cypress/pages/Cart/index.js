class Cart{

    validarProdutoPresenteNoCarrinho(productName){
        cy.contains(productName).should('be.visible');
    }
    
}

export default new Cart()