/// <reference types= "Cypress" />
import { LoginElements } from "../elements/login"
import { HomeElements } from "../elements/home"

const loginElements = new LoginElements()
const homeElements = new HomeElements()

export class LandingPage {
    visit() {
        cy.visit('/')
    }

    validateWelcomeMessage() {
        cy.get(loginElements.vldTxtOla()).contains('Olá')
    }

    goToSignUp() {
        cy.get(loginElements.vldTxtNaoECliente()).contains('Não é cliente? Abra uma conta').click()
    }

    fillSignUpForm(name, email, cpf, pass) {
        cy.get(loginElements.campoNome()).type(name)
        cy.get(loginElements.campoEmail()).type(email)
        cy.get(loginElements.campoCpf()).type(cpf)
        cy.get(loginElements.campoSenha()).type(pass)
        cy.get(loginElements.campoConfirmarSenha()).type(pass)
    }

    goToLogin() {
        cy.get(loginElements.vldTxtAcessarConta()).contains('Acessar minha conta').click()
    }

    checkLoginModalVisible() {
        cy.get(loginElements.campoCpfLogin()).should('be.visible')
    }

    fillCpfLogin(cpf) {
        cy.get(loginElements.campoCpfLogin(), { timeout: 10000 }).should('be.visible').type(cpf)
    }

    fillPasswordLogin(pass) {
        cy.get(loginElements.campoSenhaLogin()).type(pass)
    }

    // Métodos que utilizam fixture internamente para manter os steps limpos
    fillCpfLoginFromFixture(fixtureName) {
        cy.fixture(fixtureName).then((data) => {
            this.fillCpfLogin(data.cpf)
        })
    }

    fillPasswordLoginFromFixture(fixtureName) {
        cy.fixture(fixtureName).then((data) => {
            this.fillPasswordLogin(data.password)
        })
    }

    clickLoginButton() {
        cy.get(loginElements.btnEntrar()).contains('Entrar').click()
    }

    validateLoginSuccess() {
        cy.get(homeElements.vldtxtBalance()).contains('Saldo em conta')
    }
}
