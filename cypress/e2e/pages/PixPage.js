/// <reference types= "Cypress" />
import { HomeElements } from "../elements/home";
import { PixElements } from "../elements/pix";
import {LoginElements} from "../elements/login";

const pixElements = new PixElements()
const homeElements = new HomeElements()
const loginElements = new LoginElements()

export class PixPage {

    clicarBtnPix() {
        cy.get(homeElements.btnPix()).click()
    }

    clicarBtnMeusContatos() {
        cy.get(pixElements.btnMeusContatos()).click()
    }

    clicarBtnChavePix() {
        cy.get(pixElements.btnChavePix()).click()
    }

    preencherCampoChavePix() {
        cy.get(pixElements.campoChavePix()).type('88888888888')
    }

    clicarBtnIconeContatos() {
        cy.get(pixElements.btnIconeContatos()).click()
    }



}