import { elements as ele} from "./element";

class Header{

    ValidarQueCarrinhoPossuiItens(quantidade){
        cy.get(ele.cartBadge)
        .should('be.visible')
        .and('have.text', `${quantidade}`)
    }

    navegarParaCarrinho(){
        cy.get(ele.cartContainer).click()
    }

    ValidarQueCarrinhoNaoPossuiItens(){
        cy.get(ele.cartBadge)
        .should('not.exist')
    }
}

export default new Header();