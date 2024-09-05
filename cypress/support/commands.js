Cypress.Commands.add('Login', (login, senha) => {
    cy.visit('https://seubarriga.wcaquino.me/login')
        cy.get('#email').type(login)
        cy.get('#senha').type(senha)
        cy.get('.btn').click()
});