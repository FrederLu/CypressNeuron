import { loginPage, Tools } from './loginpage'
import loc from './locator.json'

describe('登录', () => {
    let login = new loginPage()

    it('输入正确用户名和密码，可以登录成功。', () => {
        login.openPage()
        login.iframe.then($iframe => {
            cy.wait(2000).wrap($iframe.contents().find(loc.login.account)).type('psp2010tiger')
            cy.wrap($iframe.contents().find(loc.login.password)).type('tiger317401')
            cy.wrap($iframe.contents().find(loc.login.submit)).click()
        })
    });

    it('输入错误用户名和密码，登录失败。', () => {
        login.openPage()
        login.login('psp2010tiger', '123456')
    });

    beforeEach(() => {
        let tool = new Tools()
        tool.generateToken()
    })
    it.skip('api', () => {
        cy.request({
            // 如果请求body中使用了json格式的数据，需带上content-type信息。
            url: '',
            method: 'post',
            headers: { 'Content-Type': 'application/json;charset=UTF-8', 'Authorization': this.token },//token来源generateToken()
            form: true,
            body: {
                'username': 'admin',
                'password': 'admin',
            }
        }).its('body').should('contain', { 'code': 200, 'meg': '成功' })
    });
})