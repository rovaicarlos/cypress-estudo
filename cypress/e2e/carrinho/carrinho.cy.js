import Header from '../../pages/Header';
import Inventory from '../../pages/Inventory';
import Login from '../../pages/Login'
import Cart from '../../pages/Cart';

describe('Carrinho', () => {

    beforeEach(() => {
        // Arrange
        cy.log(`Username: ${Cypress.env('username')}`)
        cy.log(`Password: ${Cypress.env('password')}`)
      
       Login.visitarPagina();

       Login.preencherCredenciasValidas();
    })
    
    it('Adicionar produto ao carrinho com sucesso', () => {
        // Act
        const qtdItensAdicionados = 1

        Inventory.adicionarProduto('Sauce Labs Backpack');
        // Assert
      
        Header.ValidarQueCarrinhoPossuiItens(1);

        Cart.validarProdutoPresenteNoCarrinho('Sauce Labs Backpack');
       
    })
    
    it('Remover produto do carrinho com sucesso', () => {
        // Arrange   
        Inventory.adicionarProduto('Sauce Labs Backpack');
        
        // Act
        Inventory.removerProduto('Sauce Labs Backpack');

        // Assert
        Header.ValidarQueCarrinhoNaoPossuiItens()
        
    })
})
