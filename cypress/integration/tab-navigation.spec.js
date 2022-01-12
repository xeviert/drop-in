/// <reference types="cypress" />

describe('user nav', () => {
    it('clicks through tabs', () => {
        cy.visit('http://localhost:3000/')
        cy.location('pathname').should('equal', '/')

        cy.contains('Teachers').click()
        cy.contains('Studios').click()
    })
})