export class LandingPage {

    visit() {
        cy.visit('/')
    }

    validateWelcomeMessage() {
        cy.get('#prelogin-greeting').contains('Olá')
    }

    goToSignUp() {
        cy.get('#btn-signup').contains('Não é cliente? Abra uma conta').click()
    }

    fillSignUpForm(name, email, cpf, pass) {
        cy.get('#signup-fullname').type(name)
        cy.get('#signup-email').type(email)
        cy.get('#signup-cpf').type(cpf)
        cy.get('#signup-password').type(pass)
        cy.get('#signup-confirm-password').type(pass)
    }

    goToLogin() {
        cy.get('#btn-login').contains('Acessar minha conta').click()
    }

    login(cpf, pass) {
        // Adicionei timeout e verificação de visibilidade para garantir que o modal abriu
        cy.get('#login-cpf', { timeout: 10000 }).should('be.visible').type(cpf)
        cy.get('#login-password').type(pass)
        cy.get('#btn-login-submit').contains('Entrar').click()
    }

    validateLoginSuccess() {
        cy.get('#balance-label').contains('Saldo em conta')
    }
}
