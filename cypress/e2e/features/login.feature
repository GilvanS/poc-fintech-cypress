Feature: Valdiar a tela de Login

  @CT-01.1
  Scenario: Validar login com sucesso
    Given clico no botao "Acessar minha conta" na tela "Login"
    And que estou na página de login
    When preencho o campo "CPF" na tela login
    And preencho o campo "Senha" na tela login
    Then clico no botão "Entrar" na tela login