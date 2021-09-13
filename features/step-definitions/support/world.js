const { setWorldConstructor, World } = require('@wdio/cucumber-framework');
const seleniumWebdriver = require('selenium-webdriver')

class CustomWorld extends World {
    driver = new seleniumWebdriver.Builder()
        .forBrowser('firefox')
        .build()

    constructor(options) {
        // needed so `attach`, `log` and `parameters` are properly set
        super(options)
    }

    // Returns a promise that resolves to the element
    async waitForElement(locator) {
        const condition = seleniumWebdriver.until.elementLocated(locator)
        return await this.driver.wait(condition)
    }
}

setWorldConstructor(CustomWorld)