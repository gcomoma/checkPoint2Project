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
            .click('@myAccount')
            .click('@register')
            .setValue('@enterEmail', 'omomagreg@gamil.com')
            .setValue('@enterPw', 'Pokemon2')
            .setValue('@enterZip', '11413')
            .setValue('@enterPhone', '6466517770')
            .click('@createAcct')
            .click('@skipForNow')
    },
    'sign in test': browser => {
        homeDepot
            .click('@myAccount')
            .click('@signInBtn')
            .setValue('@enterEmail', 'omomagreg@yahoo.com')
            .setValue('@enterPw', 'Pokemon1')
            .click('@signInBtn')
    },
    'verify featured categories': browser => {
        
    }
}   