import { EventEmitter } from "@angular/core"
import { AdvStepperComponent } from "./adv-stepper.component"
import { createOutputSpy } from 'cypress/angular'


// Set up some constants for the selectors
const counterSelector = '[data-cy=counter]'
const incrementSelector = '[aria-label=increment]'
const decrementSelector = '[aria-label=decrement]'

// BASIC SPY

it('clicking + fires a change event with the incremented value', () => {
  // Arrange
  cy.mount('<app-adv-stepper (change)="change.emit($event)"></app-adv-stepper>', {
    componentProperties: {
      change: {
        emit: cy.spy().as('changeSpy'),
      },
    },
    declarations: [AdvStepperComponent],
  })

  // Act
  cy.get(incrementSelector).click()

  // Assert
  cy.get('@changeSpy').should('have.been.calledWith', 1)
})

// ACCESSING COMPONENT WRAPPER

it('clicking + fires a change event with the incremented value', () => {
  cy.mount(
    '<app-adv-stepper count="100" (change)="change.emit($event)"></app-adv-stepper>',
    {
      componentProperties: { change: new EventEmitter() },
      declarations: [AdvStepperComponent],
    }
  ).then((wrapper) => {
    console.log({ wrapper })
    cy.spy(wrapper.component.change, 'emit').as('changeSpy')
    return cy.wrap(wrapper).as('angular')
  })
  cy.get(incrementSelector).click()
  cy.get('@changeSpy').should('have.been.calledWith', 101)
})

// USING createOutputSpy

it('clicking + fires a change event with the incremented value', () => {
  // Arrange
  cy.mount('<app-adv-stepper (change)="change.emit($event)"></app-adv-stepper>', {
    declarations: [AdvStepperComponent],
    componentProperties: {
      change: createOutputSpy<boolean>('changeSpy'),
    },
  })
  cy.get(incrementSelector).click()
  cy.get('@changeSpy').should('have.been.called')
})

// USING OUTPUT SPY (expmt)

it('clicking + fires a change event with the incremented value', () => {
  // Arrange
  cy.mount(AdvStepperComponent, {
    declarations: [AdvStepperComponent],
    autoSpyOutputs: true,
    componentProperties: {
      count: 100,
    },
  })
  cy.get(incrementSelector).click()
  cy.get('@changeSpy').should('have.been.called')
})
