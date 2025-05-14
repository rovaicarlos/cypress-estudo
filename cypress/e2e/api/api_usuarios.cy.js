const { faker } = require('@faker-js/faker');

const urlAPI = 'http://localhost:3000'
let userId 

describe("API - Teste funcional de Usuarios", () => {
    
    it("POST - Cadastra um novo usuario novo do tipo administrador", () => {
        cy.request({
            method:'POST',
            url:`${urlAPI}/usuarios`,
            body:
            {
                "nome": faker.person.fullName(),
                "email": faker.internet.email(),
                "password": faker.internet.password(),
                "administrador": "true"
            }
        }).then((response) => {
            expect(response.status).to.equal(201)
            expect(response.body.message).contains('Cadastro realizado com sucesso')
            expect(response.body).to.have.property('_id')
            userId = response.body._id
        })
        
    })

    it("GET - Lista todos os usuários", () => {
       cy.request({
        method: 'GET',
        url: `${urlAPI}/usuarios`
    }).then((response) => {
        expect(response.status).to.equal(200)
        expect(response.body.usuarios).to.be.not.empty  
        })
    })

    it("GET - Lista um usuario especifico passando um ID", () => {
       cy.request({
        method: 'GET',
        url: `${urlAPI}/usuarios/${userId}`
    }).then((response) => {
        expect(response.status).to.equal(200)
        expect(response.body._id).to.be.equal(userId)
        })
    })

    it("POST - Não deve cadastrar um novo usuario com um email já cadastrado", () => {
        cy.request({
            method:'POST',
            url:`${urlAPI}/usuarios`,
            body:
            {
                "nome": faker.person.fullName(),
                "email": "beltrano@qa.com.br",
                "password": faker.internet.password(),
                "administrador": "true"
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.equal(400)
            expect(response.body.message).contains('Este email já está sendo usado')
        })
    })

    it("GET - Deve buscar um usuario com um ID que existe", () => {
        cy.request({
            method:'GET',
            url:`${urlAPI}/usuarios/${userId}`,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body._id).to.be.equal(userId)
        })
    })

    it("GET - Deve buscar um usuario com um ID que não existe", () => {
        cy.request({
            method:'GET',
            url:`${urlAPI}/usuarios/asdfghjklqwertyu`,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.equal(400)
            expect(response.body.message).contains('Usuário não encontrado')
        })
    })

    it('DELETE - Deve excluir usuário filtrando pelo ID', () => {
      cy.request({
      method: "DELETE",
      url: `${urlAPI}/usuarios/${userId}`,
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.message).to.contain("Registro excluído com sucesso");
    });
    })

})