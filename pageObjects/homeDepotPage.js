module.exports = {
    url: 'https://www.homedepot.com/',
    elements: {
        myAccount: 
            {selector: '(//div[text()="My Account"])[1]', locateStrategy: 'xpath'},
        signInBtn: 
            {selector: '//a[@class="bttn bttn--primary"]', locateStrategy: 'xpath'},
        enterEmail: '#email',
        enterPw: '#password-input-field', 
        createAcct: 
            {selector: '//span[text()="Create an Account"]', locateStrategy: 'xpath'},
        enterZip: '#zipCode', 
        enterPhone: '#phone',
        skipForNow: 
            {selector: '//span[text()="Skip for now & Continue Shopping"]', locateStrategy: 'xpath'},
        register:
            {selector: '//span[text()="Register"]', locateStrategy: 'xpath'},
    },  
}