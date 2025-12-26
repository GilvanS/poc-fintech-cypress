# 🏦 POC Fintech - Automação E2E com Cypress e Cucumber

Este projeto consiste na automação de testes End-to-End (E2E) para uma aplicação Fintech, utilizando **Cypress** integrado com **Cucumber** para escrita de cenários em BDD (Behavior Driven Development).

O projeto foi estruturado utilizando o padrão **Page Objects** para garantir manutenibilidade, escalabilidade e reutilização de código.

---

## 🚀 Tecnologias Utilizadas

*   **[Cypress](https://www.cypress.io/)**: Framework de testes automatizados.
*   **[Cucumber Preprocessor](https://github.com/TheBrainFamily/cypress-cucumber-preprocessor)**: Integração para rodar especificações `.feature`.
*   **JavaScript (ES6+)**: Linguagem de programação.
*   **Node.js**: Ambiente de execução.

---

## 📂 Arquitetura do Projeto

O projeto segue uma separação clara de responsabilidades:

```text
cypress/
├── e2e/
│   ├── elements/      # Mapeamento de seletores (CSS/ID/XPath)
│   ├── features/      # Arquivos .feature (Gherkin)
│   ├── pages/         # Lógica de interação com a página (Page Objects)
│   └── steps/         # Definição dos passos (Step Definitions)
├── fixtures/          # Massa de dados estática (JSON)
└── support/           # Configurações globais e comandos customizados
```

### Detalhes da Implementação

1.  **Features**: Descrevem o comportamento esperado em linguagem natural (Gherkin).
2.  **Steps**: Fazem a ponte entre o Gherkin e o código JavaScript. Eles **não contêm lógica de página**, apenas chamam os métodos das Pages.
3.  **Pages**: Contêm os métodos que interagem com a página (cliques, preenchimentos). Elas encapsulam o uso de `cy.get` e `cy.fixture`.
4.  **Elements**: Arquivos que retornam apenas os seletores dos elementos, facilitando a manutenção caso o ID ou Class de um elemento mude.

---

## 🥒 Features (Cenários de Teste)

Atualmente, o projeto cobre as seguintes funcionalidades principais:

### 1. Login (`login.feature`)
Responsável por validar o acesso do usuário ao sistema.

*   **Cenário Principal**: `Validar login com sucesso`
    *   Acessa a tela de login.
    *   Preenche CPF e Senha (dados consumidos via `fixture`).
    *   Valida o redirecionamento para a home logada.

### 2. Cadastro (`cadastro.feature`)
Responsável pelo fluxo de novos usuários.

*   **Cenários**:
    *   Validar mensagem de boas-vindas.
    *   Realizar cadastro de novo usuário (fluxo de abertura de conta).

---

## ⚙️ Como Configurar e Rodar

### Pré-requisitos
*   Node.js instalado.

### Instalação
Clone o repositório e instale as dependências:

```bash
npm install
```

### Executando os Testes

Para abrir a interface interativa do Cypress (Test Runner):

```bash
npm run cypress:open
```

Isso abrirá a janela do Cypress onde você poderá selecionar `E2E Testing` e escolher qual arquivo `.feature` deseja executar.

---

## 📝 Exemplo de Código (Gherkin)

Exemplo de como os testes são escritos em `login.feature`:

```gherkin
Feature: Validar a tela de Login

  @CT-01.1
  Scenario: Validar login com sucesso
    Given clico no botao "Acessar minha conta" na tela "Login"
    And que estou na página de login
    When preencho o campo "CPF" na tela login
    And preencho o campo "Senha" na tela login
    Then clico no botão "Entrar" na tela login
```
