describe('My First Test', () => {
  it('Visits the initial project page', () => {

    // Interceptor for network requests and mocks
    cy.intercept("GET", 'http://localhost:4200/', (req) => {
      req.alias = "getPage"
    })

    cy.visit('/')

    // wait for get request
    cy.wait("@getPage")

    cy.contains('app is running!')

    // Intercept and mock with fixture data
    // cy.intercept("GET", 'http://localhost:3001/apidata.js', { fixture: "example.json" })


    cy.get('[data-testid="nextStepsCards"] button').as('nextStepBtns')

    cy.get('@nextStepBtns').should('have.length', 6).and($btn => {
      expect($btn.get(0).textContent, 'first item').to.equal('New Component')
      expect($btn.get(1).textContent, 'second item').to.equal('Angular Material')
    })

    // Click first element
    cy.get('@nextStepBtns').first().click()
    cy.contains('ng generate component xyz')

    // Click second element
    cy.get('@nextStepBtns').eq(1).click()

    cy.contains('ng add @angular/material')
  })
})
