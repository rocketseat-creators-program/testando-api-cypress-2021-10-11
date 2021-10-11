/// <reference types="cypress" />

describe('Tasks', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.intercept({
      method: 'POST',
      url: 'https://jsonplaceholder.typicode.com/todos',
    }).as('postTasks')
    cy.fixture('task.json').as('example')
    cy.visit('/')
  })

  it('lista vazia', () => {
    cy.get('.list-group-item').first().should('contain', 'Nenhuma tarefa')
  })

  it('lista hardCode', () => {
    const taskList = [
      "Ir ao supermercado",
      "Passear com o cachorro",
      "Ir a academia"
    ]

    taskList.map(task => {
      cy.get('[data-cy="input-tarefa"]').type(task)
      cy.get('[data-cy="botao-tarefa"]').click()
      cy.wait('@postTasks').then((interception) => {
        expect(interception.response.statusCode).to.equal(201)
      })
      cy.wait(500)
    })
  })

  it('lista a partir da fixture', () => {
    cy.fixture('task').should((task) => {
      task.tasks.map(task => {
        cy.get('[data-cy="input-tarefa"]').type(task)
        cy.get('[data-cy="botao-tarefa"]').click()
        cy.wait('@postTasks').then((interception) => {
          expect(interception.response.statusCode).to.equal(201)
        })
        cy.wait(500)
      })
    })

  })

})
