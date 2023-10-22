describe.skip('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })

  it('finds the content "type"', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type').click()
  })

  it('Does not do much!', () => {
    expect(true).to.equal(false)
  })

  it('Visits the Kitchen Sink', () => {
    cy.visit('https://example.cypress.io')
  })
})