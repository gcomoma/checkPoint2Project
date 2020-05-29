var searchArray = require('../testsAssets/searchArray')
var homeDepotArray2 = require('../testsAssets/homeDepotArray2')
var homeDepotArray = require('../testsAssets/homeDepotArray')
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
            .pause(5000)
            .click('@register')
            .setValue('@enterEmail', 'omomagreg@gmail.com')
            .setValue('@enterPw', 'Pokemon2')
            .setValue('@enterZip', '11413')
            .setValue('@enterPhone', '6466517770')
            .click('@createAcct')
            .click('@skipForNow')
    },
    'sign in test': browser => {
        homeDepot
            .click('@myAccount')
            .pause(5000)
            .click('@signInBtn')
            .setValue('@enterEmail', 'omomagreg@yahoo.com')
            .setValue('@enterPw', 'Pokemon1')
            .click('@signIn')
    },
    'verify featured categories': browser => {
        var homeDepotObject = {
            process: (pageObject, item) => {
                pageObject
                    .pause(5000)
                    .click('@homeDecor')
                    .click(item.category)
                    .verify.containsText('@header', item.result)
                    .click('@home')
            }
        }
        homeDepotArray.forEach(info => {
            homeDepotObject.process(homeDepot, info)
        })

    },
    'verify featured categories 2': broswer => {
        var homeDepotObject2 = {
            stage: (pageObject, piece) => {
                pageObject
                    .useXpath()
                    .click(`(//img[@class="visualNav__img"])[${piece.number}]`)
                    .verify.containsText('@header', piece.result)
                    .click('@home')
            }
        }
        homeDepotArray2.forEach(data => {
            homeDepotObject2.stage(homeDepot, data)
        })
    },
    'Transactions test': browser => {
        homeDepot
            .click('@schlage')
            .click('@cart')
            .pause(4000)
            .click('@checkOut')
            .setValue('@firstName', 'bob')
            .setValue('@lastName', 'george')
            .setValue('@phone', '8888888888')
            .setValue('@shippingAddress', '123 main st New York, NY ')
            .setValue('@zipCode', '12345')
     },
     'Search Function': browser => {
         var homeDepotobject3 = {
             search: (pageObject, commodity) => {
                 pageObject
                    .setValue('@searchBar', commodity.item)
                    .click('@searchButton')
                    .verify.containsText('@header', commodity.res)
                    .clearValue('@searchBar')
             }
         }
         searchArray.forEach(point => {
             homeDepotobject3.search(homeDepot, point)
         })
     }

}  