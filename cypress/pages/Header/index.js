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

    AbreMenu(){
        //Clica no menu
        cy.get(ele.menuIcon).click()
        //Verifica se existe as 4 opções no menu
        cy.get('nav a').should(($links) => {
            expect($links).to.have.length(4)
          })
        
    }

    RealizaLogout(){
        //Realiza logout  
        cy.get(ele.logoutClick).click()
    }
}

export default new Header();