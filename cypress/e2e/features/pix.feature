@pix @all
Feature: Salvar Contatos Pix

  Background:
    Given clico no botao "Acessar minha conta" na tela "Login"
    And que estou na página de login
    When preencho o campo "CPF" na tela login
    And preencho o campo "Senha" na tela login
    Then clico no botão "Entrar" na tela login

  @CT-05.1
  Scenario: Validar cadastro de favorito
    Given clico no botão PIX na tela Home
    When clico no botão Meus Contatos na tela Area Pix
    And clico no botão Novo Contato na tela Area Pix
    And clico no botão entendi na tela Area Pix
    And preencho o campo Chave PIX na tela Area Pix
    And clico no botão Buscar na tela Area Pix
    And valido o usuario para salvar como contato na tela Area Pix
    Then clico no botão Salvar na tela Area Pix
    And valido a mensagem Contato salvo contato sucesso