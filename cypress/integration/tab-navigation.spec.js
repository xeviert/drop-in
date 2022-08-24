/// <reference types="cypress" />
import { baseUrl } from '../../cypress.json'

describe('user nav', () => {
    it('clicks through tabs', () => {
        cy.visit(baseUrl)
        cy.location('pathname').should('equal', '/')

        cy.contains('Teachers').click()
        cy.contains('Studios').click()
    })
})