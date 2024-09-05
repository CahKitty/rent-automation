describe('Automação da plataforma de Gestão de Aluguéis - Seu Barriga', () => {
  
  it('Sucesso ao Logar na plataforma', () => {
    cy.visit('https://seubarriga.wcaquino.me/login')
    cy.Login(Cypress.env('USER_EMAIL'),Cypress.env('USER_PASSWORD'))

    cy.contains('Bem vindo, Carla Annunciato!')
      .should('be.visible')
  })

  it('Sucesso ao Logar na plataforma', () => {
    cy.visit('https://seubarriga.wcaquino.me/login')
    cy.Login('emailerrado@gmail.com', 'senha1nv4lid4');

    cy.contains('Problemas com o login do usuário')
    .should('be.visible')
  })
  
})