const BasePage = require('./BasePage');

class OnlinerMain extends BasePage {

    constructor() {
        super()
    }
    get CartButton() { return '//*[contains(@class,\'auth-bar__item--cart\')]'};



}

module.exports = OnlinerMain;
