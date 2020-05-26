var checkPoint2 = {}
module.exports = {
    before: browser => {
        checkPoint2 = browser.page.checkPoint2Page()
        checkPoint2.navigate()
        // .waitForElementPresent('body')
    },
    after: browser => {
        checkPoint2.end()
    },
    
}   