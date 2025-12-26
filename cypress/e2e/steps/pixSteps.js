import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { HomePage } from "../pages/HomePage"
import { PixPage } from "../pages/PixPage";
import {LandingPage} from "../pages/LandingPage";

const pixPage = new PixPage()
const homePage = new HomePage()
const landingPage = new LandingPage()

Given('clico no botão PIX na tela Home', function () {
    pixPage.clicarBtnPix()
});

When('clico no botão Meus Contatos na tela Area Pix', function () {
    pixPage.clicarBtnMeusContatos()
});

When('clico no botão Novo Contato na tela Area Pix', function () {
    pixPage.clicarBtnChavePix()
});

When('clico no botão entendi na tela Area Pix', function () {
    landingPage.clicarBtnEntendi()
});

When('preencho o campo Chave PIX na tela Area Pix', function () {
    pixPage.preencherCampoChavePix()
});

When('clico no botão Buscar na tela Area Pix', function () {
    pixPage.clicarBtnIconeContatos()
});

When('valido o usuario para salvar como contato na tela Area Pix', function () {
    homePage.validarUsuario()
});

Then('clico no botão Salvar na tela Area Pix', function () {
    homePage.clicarBtnSalvar()
});

Then('valido a mensagem Contato salvo contato sucesso', function () {
    homePage.validarMensagem()

});