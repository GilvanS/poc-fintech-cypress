Feature: Cadastro de Usuário

  Scenario: Validar mensagem de boas vindas
    Given que estou na tela inicial do navegador
    Then vejo a mensagem de boas vindas

  Scenario: Realizar cadastro de novo usuário
    Given que estou na tela inicial do navegador
    When clico em abrir uma conta
    And preencho os dados do cadastro