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
    'Test even and odd Results': browser => {
        checkPoint2
        .setValue('@evenOddInput', '23, 88, 109, 445555')
        .click('@evenOddBtn')
        .verify.containsText('@evenResults', '88')
        .verify.containsText('@oddResults', '23,109,445555')
    },
    'Test filter object results': browser => {
        checkPoint2
        .setValue('@objInput', 'name')
        .click('@objBtn')
        .clearValue('@objInput')
        .verify.containsText('@objResults', '[ { "name": "Jimmy Joe", "title": "Hack0r", "age": 12 }, { "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" }, { "name": "Carly Armstrong", "title": "CEO" } ]')
        .setValue('@objInput', 'title')   
        .click('@objBtn')
        .clearValue('@objInput')
        .verify.containsText('@objResults', '[ { "name": "Jimmy Joe", "title": "Hack0r", "age": 12 }, { "name": "Carly Armstrong", "title": "CEO" } ]')
        .setValue('@objInput', 'hairColor')
        .click('@objBtn')
        .clearValue('@objInput')
        .verify.containsText('@objResults', '[ { "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" } ]')
        .setValue('@objInput', 'age')
        .click('@objBtn')
        .clearValue('@objInput')
        .verify.containsText('@objResults', '[ { "name": "Jimmy Joe", "title": "Hack0r", "age": 12 }, { "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" } ]')
    },
    'Filter String Results': browser => {
        checkPoint2
        .setValue('@stringInput', 'James')
        .click('@stringBtn')
        .clearValue('@stringInput')
        .verify.containsText('@stringResults', 'James')
        .setValue('@stringInput', 'Jessica')
        .click('@stringBtn')
        .clearValue('@stringInput')
        .verify.containsText('@stringResults', 'Jessica')
        .setValue('@stringInput', 'Melody')
        .click('@stringBtn')
        .clearValue('@stringInput')
        .verify.containsText('@stringResults', 'Melody')
        .setValue('@stringInput', 'Tyler')
        .click('@stringBtn')
        .clearValue('@stringInput')
        .verify.containsText('@stringResults', 'Tyler')
        .setValue('@stringInput', 'Blake')
        .click('@stringBtn')
        .clearValue('@stringInput')
        .verify.containsText('@stringResults', 'Blake')
        .setValue('@stringInput', 'Jennifer')
        .click('@stringBtn')
        .clearValue('@stringInput')
        .verify.containsText('@stringResults', 'Jennifer')
        .setValue('@stringInput', 'Mark')
        .click('@stringBtn')
        .clearValue('@stringInput')
        .verify.containsText('@stringResults', 'Mark')
        .setValue('@stringInput', 'Maddy')
        .click('@stringBtn')
        .clearValue('@stringInput')
        .verify.containsText('@stringResults', 'Maddy')
    },
    'Palindrome Result Test': browser=> {
        checkPoint2
        .setValue('@palInput', 'level')
        .click('@palBtn')
        .verify.containsText('@palResults', 'true')
        .setValue('@palInput', 'cop')
        .click('@palBtn')
        .verify.containsText('@palResults', 'false')
    },
    'Add Results Test': browser => {
        checkPoint2
        .setValue('@sum1Input', '12')
        .setValue('@sum2Input', '15')
        .click('@sumAdd')
        .verify.containsText('@sumResults', '27')
    },
    // bug, will put decimal numbers in odd section 
    'decimal point even odd test': broswer => {
        checkPoint2
        .setValue('@evenOddInput', '10.98')
        .click('@evenOddBtn')
        .verify.containsText('@oddResults', 'null')
    },
    // bug, will not return multiple names back
    'Multiple names filter object test': browser => {
        checkPoint2
        .setValue('@stringInput', 'James, Jessica')
        .click('@stringBtn')
        .verify.containsText('@stringResults', 'James, Jessica')
    },
    'random letters Palindrome Test': browser => {
        checkPoint2
        .setValue('@palInput', 'pnnp')
        .click('@palBtn')
        .verify.containsText('@palResults', 'false')
    },
    // bug, will not show or correctly add decimals
    'sum of decimals Test {trello board(https://trello.com/b/0IZKZSyv/check-point-2-project)}': broswer => {
        checkPoint2
        .setValue('@sum1Input', '11.67')
        .setValue('@sum2Input', '2.33')
        .click('@sumAdd')
        .verify.containsText('@sumResults', '14')
    }
}   