/// <reference types= "Cypress" />
import { LandingPage } from '../pages/LandingPage'

describe('template spec', () => {

  const landingPage = new LandingPage()

  beforeEach( 'Abrir site', ()=> {
    landingPage.visit()
  })

  it('CT01.1 - - Valido a aquisição de conta', () => {
    landingPage.validateWelcomeMessage()
  })

  it('CT01.2 - - Valido a aquisição de conta', () => {
    landingPage.validateWelcomeMessage()
    landingPage.goToSignUp()
    landingPage.fillSignUpForm(
        'Gilvan Sousa',
        'gilvan@gmail.com',
        '12345678900',
        'admin999')
  })

  it('CT01.3 - Abrir site e acessar conta', () => {
    landingPage.validateWelcomeMessage()
    landingPage.goToLogin()
    landingPage.login(
        '88888888888',
        'admin999')
    cy.intercept('GET', 'https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=3&busca=economia')
    landingPage.validateLoginSuccess()
  })
})