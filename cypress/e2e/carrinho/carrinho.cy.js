import Header from '../../pages/header';
import Inventory from '../../pages/inventory';
import Login from '../../pages/Login'
import Cart from '../../pages/cart';

describe('Carrinho', () => {

    beforeEach(() => {
        // Arrange
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
