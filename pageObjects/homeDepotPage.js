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
        homeDecor:
            {selector: '//a[text()="Home Decor & Furniture"]', locateStrategy: 'xpath'},
        furniture:
            {selector: '//a[text()="Furniture"]', locateStrategy: 'xpath'},
        wallDecor:
            {selector: '//a[text()="Wall Decor"]', locateStrategy: 'xpath'},
        kitchenDining:
            {selector: '//a[text()="Kitchen & Dining"]', locateStrategy: 'xpath'},
        bedBath:
            {selector: '//a[text()="Bedding & Bath"]', locateStrategy: 'xpath'},
        lighting:
            {selector: '//a[text()="Lighting"]', locateStrategy: 'xpath'},
        window:
            {selector: '//a[text()="Window Treatments"]', locateStrategy: 'xpath'},
        header:
            {selector: '//h1', locateStrategy: 'xpath'},
        home:
            {selector: '//a[text()="Home"]', locateStrategy: 'xpath'},
    },  
}