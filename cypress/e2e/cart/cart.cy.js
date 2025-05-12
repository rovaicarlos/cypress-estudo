import Checkout from '../../pages/Checkout';
import Cart from '../../pages/Cart';
import Header from '../../pages/Header';
import Inventory from '../../pages/Inventory';
import Login from '../../pages/Login';

const { faker } = require('@faker-js/faker');

describe('Cart', () => {

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

    it('Adicionar produto ao carrinho e finaliza check out com sucesso', () => {

        Inventory.adicionarProduto('Sauce Labs Backpack');
      
        Header.ValidarQueCarrinhoPossuiItens(1);

        Cart.validarProdutoPresenteNoCarrinho('Sauce Labs Backpack');

        Inventory.vaiAtePaginaDoCarrinho();

        Cart.clicaNoBotaoDeCheckout();

        Checkout.preencheCamposCorretosParaPagamento(faker.person.firstName(), faker.person.lastName(), faker.location.zipCode());  

        Checkout.finalizaCheckout();

        Checkout.verificaQueCompraFoiConcluidaComSucesso();
    })

    it('Adicionar produto ao carrinho e finaliza check out sem informações de pagamento ', () => {

        Inventory.adicionarProduto('Sauce Labs Backpack');
      
        Header.ValidarQueCarrinhoPossuiItens(1);

        Cart.validarProdutoPresenteNoCarrinho('Sauce Labs Backpack');

        Inventory.vaiAtePaginaDoCarrinho();

        Cart.clicaNoBotaoDeCheckout();

        Checkout.naoPreencheDadosParaPagamento();  

        //deve verificar que a URL não mudou para o segundo checkout 
        Checkout.validaQueAPaginaEoCheckoutStepOne();
    })
})
