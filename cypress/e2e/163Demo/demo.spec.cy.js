describe.skip('My First Test', () => {
  it('finds the content "type"', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type').click()
  })

  it.skip('Does not do much!', () => {
    expect(true).to.equal(false)
  })

  it.only('163login iframe', () => {
    cy.visit('https://mail.163.com/')
    cy.get('iframe[frameborder="0"]').then($iframe => {
      cy.wait(2000).wrap($iframe.contents().find('[placeholder="邮箱帐号或手机号码"]')).type('psp2010tiger')
      // cy.wait(2000).wrap($iframe.contents().find('[placeholder="邮箱帐号或手机号码"]')).then($n=>{
      //     cy.wrap($n).type('psp2010tiger')
      // })
      cy.wrap($iframe.contents().find('[name="password"]')).type('311701')
      // cy.wrap($iframe.contents().find('#dologin')).click()
    })
    cy.url().should("include", 'main')
    cy.title().should('include', '网易')
  })
})