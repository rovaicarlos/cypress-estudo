import Header from "../../pages/Header";
import Inventory from "../../pages/Inventory";
import Login from "../../pages/Login"


describe('Login', () => {

    beforeEach(() => {
        Login.visitarPagina()
    })

    it('Realizar login com sucesso', () => {
        Login.preencherCredenciasValidas()

        Inventory.validarAcessoPagina()
    })
    
    it('Realizar login e logout com sucesso', () => {
        Login.preencherCredenciasValidas()

        Inventory.validarAcessoPagina()
        
        Header.AbreMenu()
        Header.RealizaLogout()
    })

    it('Realizar login com credenciais inválidas', () => {
    // Act
    Login.preencherCredenciasInvalidas();
    // Assert
    Login.validarErroCredenciaisInvalida();
   
    Login.validarAcessoPagina();
    
    })

    it('Realiza login com usuário bloqueado', () => {
        Login.validaUsuarioComBloqueio()
        
    })
})