# Trabalho Final – Teste de Software

## Sistema de Gerenciamento de Usuários

### Assunto

Desenvolvimento de uma aplicação web para gerenciamento de usuários utilizando Go (Golang), PostgreSQL e React, aplicando conceitos de testes de software para validação do sistema.

### Desenvolvedor

**Vitório Quadros da Silva**

---

# Objetivo

O objetivo deste trabalho foi desenvolver uma aplicação capaz de realizar operações de cadastro, listagem e exclusão de usuários, utilizando uma API desenvolvida em Go integrada a um banco de dados PostgreSQL e uma interface gráfica desenvolvida em React.

Além do desenvolvimento da aplicação, foram realizados testes unitários, testes de integração e testes de interface para garantir o correto funcionamento do sistema.

---

# Tecnologias Utilizadas

* Go (Golang)
* Gin Framework
* PostgreSQL
* React
* Vite
* Vitest
* Testing Library
* Git e GitHub

---

# Testes Realizados

## 1. Teste Unitário

Foi desenvolvido um teste unitário para validar a função responsável pela verificação do nome informado pelo usuário.

### Cenários testados

* Nome vazio deve ser considerado inválido.
* Nome preenchido deve ser considerado válido.

### Objetivo

Verificar o comportamento isolado da função de validação sem dependência de banco de dados ou interface.

---

## 2. Teste de Integração

Foi realizado um teste de integração para validar a comunicação entre a aplicação e o banco de dados PostgreSQL.

### Cenário testado

* Conexão com o banco de dados.
* Execução da consulta SQL `SELECT 1`.
* Validação do resultado retornado.

### Objetivo

Garantir que a aplicação consiga estabelecer conexão com o banco de dados e executar consultas corretamente.

Também foi realizado um teste da API utilizando requisições HTTP para validar o endpoint de listagem de usuários.

---

## 3. Teste de Interface

Foram desenvolvidos testes automatizados para validar o comportamento da interface gráfica da aplicação React.

### Cenários testados

* Verificação da renderização dos botões principais:

  * Criar
  * Listar
  * Deletar

* Verificação da interação do usuário com a tela de criação.

* Verificação da digitação de dados no campo de cadastro de usuário.

### Objetivo

Garantir que os componentes visuais sejam exibidos corretamente e que o usuário consiga interagir com a aplicação conforme esperado.

---

# Conclusão

Os testes realizados permitiram validar os principais componentes do sistema em diferentes níveis. Os testes unitários garantiram o funcionamento correto das funções isoladas, os testes de integração verificaram a comunicação com o banco de dados e a API, enquanto os testes de interface confirmaram o comportamento esperado da aplicação do ponto de vista do usuário.

Dessa forma, foi possível aumentar a confiabilidade do sistema e reduzir a possibilidade de falhas durante sua utilização.
