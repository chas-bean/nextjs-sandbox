import React from 'react'
import Home from '../../pages/index'

describe('<Home />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Home />)
  })
})