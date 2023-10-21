describe('首页',()=>{
    it('首页点击登录', () => {
        // 访问首页
        cy.visit('http://testingpai.com/')
        // 点击登录按钮
        cy.get('#navLogin').click()
        // 断言信息
        cy.url().should("include",'login')
        cy.title().should('include','登录')
    });
})