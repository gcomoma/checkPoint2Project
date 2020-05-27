var homeDepot = {}
module.exports = {
    before: browser => {
        homeDepot = browser.page.homeDepotPage()
        homeDepot.navigate()
        // .waitForElementPresent('body')
    },
    after: browser => {
        homeDepot.end()
    },
    'sign up test': browser => {
        homeDepot
            .click
    }
}   