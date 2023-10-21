import loc from './locator.json'

describe('获取cell信息', () => {
    it('指定cells信息', () => {
        cy.request({
            // 如果请求body中使用了json格式的数据，需带上content-type信息。
            url: loc.testBaseUrl,
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: {
                "jsonrpc": "2.0",
                "method": "get_cells",
                "params": [loc.getCells.params, loc.getCells.sort.ASC, loc.getCells.quantity],
                "id": 1
            }
        }).as("res")
        cy.get("@res").then((res) => {
            cy.log(res.allRequestResponses)
        })
    });
})