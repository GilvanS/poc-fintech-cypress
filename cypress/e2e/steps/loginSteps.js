import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { LandingPage } from '../pages/LandingPage';

const landingPage = new LandingPage();

Given('clico no botao "Acessar minha conta" na tela "Login"', () => {
    landingPage.visit();
    landingPage.goToLogin();
});

Given('que estou na página de login', () => {
    landingPage.checkLoginModalVisible();
});

When('preencho o campo "CPF" na tela login', () => {
    landingPage.fillCpfLoginFromFixture('example');
});

When('preencho o campo "Senha" na tela login', () => {
    landingPage.fillPasswordLoginFromFixture('example');
});

Then('clico no botão "Entrar" na tela login', () => {
    landingPage.clickLoginButton();
    landingPage.validateLoginSuccess();
});
