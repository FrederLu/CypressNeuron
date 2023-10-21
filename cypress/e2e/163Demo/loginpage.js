import loc from './locator.json'

class loginPage {
    // 初始化
    constructor() {
        this.url = loc.login.url
    }

    // 封装对象
    get iframe() {
        return cy.get(loc.login.iframe)
    }

    get account() {
        return cy.get(loc.login.account)
    }

    get password() {
        return cy.get(loc.login.password)
    }

    get submit() {
        return cy.get(loc.login.submit)
    }

    openPage() {
        cy.visit(this.url)
    }


    // 封装业务流
    login(email, pwd) {
        if (email !== '') {
            this.account.type(email)
        } else if (pad !== '') {
            this.password.type(pwd)
        }
        this.submit.check()
    }
}

// 工具类代码
class Tools {
    // 该方法可以在后面用例中使用`beforeEach(()=>{})`方式调用，类似还有afterEach()方法。
    generateToken() {
        cy.request({
            url: '',
            method: 'post',
            form: true,
            body: {
                'username': 'admin',
                'password': 'admin',
            }
            // 获取response中token，使用`wrap`包装后使用`as`定义为‘token’别名
        }).then(res => { cy.wrap(res.body.data.token) }).as('token')
    }
}

/*
export与export default的区别:
export与export default均可用于导出常量、函数、文件、模块等,可以在其它文件或模块中通过import+(常量 | 函数 | 文件 | 模块)名的方式，
将其导入以便能够对其进行使用.export default后面不能跟const或let的关键词,export、import可以有多个，export default仅有一个。
通过export方式导出，在导入时要加 { }，export default则不需要,export具名导出xxx，export default匿名。区别在于导入的时候，export需要一样的名称才能匹配，
后者无论取什么名都可以。模块化管理中一个文件就是一个模块，export可以导出多个方法和变量，export default只能导出当前模块，一个js文件中只支持出现一个.
*/
export { loginPage, Tools }