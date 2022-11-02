import { StepperComponent } from './stepper.component'

// Set up some constants for the selectors
const counterSelector = '[data-cy=counter]'
const incrementSelector = '[aria-label=increment]'
const decrementSelector = '[aria-label=decrement]'

it('stepper should default to 0', () => {
  // Arrange
  cy.mount('<app-stepper></app-stepper>', {
    declarations: [StepperComponent],
  })
  // Assert
  cy.get(counterSelector).should('have.text', '0')
})


it('supports an "Input()" count that sets the value', () => {
  // Arrange
  cy.mount('<app-stepper [count]="100"></app-stepper>', {
    declarations: [StepperComponent],
  })
  // Assert
  cy.get(counterSelector).should('have.text', '100')
})


it('when the increment button is pressed, the counter is incremented', () => {
  // Arrange
  cy.mount('<app-stepper></app-stepper>', {
    declarations: [StepperComponent],
  })
  // Act
  cy.get(incrementSelector).click()
  // Assert
  cy.get(counterSelector).should('have.text', '1')
})

it('when the decrement button is pressed, the counter is decremented', () => {
  // Arrange
  cy.mount('<app-stepper></app-stepper>', {
    declarations: [StepperComponent],
  })
  // Act
  cy.get(decrementSelector).click()
  // Assert
  cy.get(counterSelector).should('have.text', '-1')
})

it('when clicking increment and decrement buttons, the counter is changed as expected', () => {
  cy.mount('<app-stepper [count]="100"></app-stepper>', {
    declarations: [StepperComponent],
  })
  cy.get(counterSelector).should('have.text', '100')
  cy.get(incrementSelector).click()
  cy.get(counterSelector).should('have.text', '101')
  cy.get(decrementSelector).click().click()
  cy.get(counterSelector).should('have.text', '99')
})
