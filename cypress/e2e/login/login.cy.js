import Inventory from "../../pages/Inventory";
import Login from "../../pages/Login"


describe('Login', () => {

    beforeEach(() => {
        Login.visitarPagina();
    })

    it('Realizar login com sucesso', () => {
        Login.preencherCredenciasValidas();

        Inventory.validarAcessoPagina();
    })

    it('Realizar login com credenciais inválidas', () => {
    // Act
    Login.preencherCredenciasInvalidas();
    // Assert
    Login.validarErroCredenciaisInvalida();
   
    Login.validarAcessoPagina();
})
})