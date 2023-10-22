describe.skip('demo', () => {
    it('baidu', () => {
        cy.visit('https://www.baidu.com/')
        cy.get('#kw').type('hello')
        cy.get('#su')
    });

    // it.skip表示跳过该条用例， it.only 只运行该条用例。
    it.skip('接口', () => {
        cy.request({
            url: '',
            method: 'post',
            form: true,
            body: {
                'account': 'admin',
                'password': '123456',
                'verify': '',
                'submit': '登录'
            }
        }).then(
            response => {
                cy.log(response.body)
                cy.log(response.status)
            }
        ).should('contain.text', '成功')
    });
})