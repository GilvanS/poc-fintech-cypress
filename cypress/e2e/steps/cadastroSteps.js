import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { LandingPage } from '../pages/LandingPage';

const landingPage = new LandingPage();

Given(/^que estou na tela inicial do navegador$/, function () {
    landingPage.visit();
});

Then(/^vejo a mensagem de boas vindas$/, function () {
    landingPage.validateWelcomeMessage();
});

When('clico em abrir uma conta', () => {
    landingPage.goToSignUp();
});

When('preencho os dados do cadastro', () => {
    landingPage.fillSignUpForm(
        'Gilvan Sousa',
        'gilvan@gmail.com',
        '12345678900',
        'admin999'
    );
});
