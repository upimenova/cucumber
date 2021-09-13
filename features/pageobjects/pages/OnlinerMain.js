const BasePage = require('./BasePage');

class OnlinerMain extends BasePage {

    constructor() {
        super()
    }
    get CartButton() { return '.auth-bar__item--cart'};



}

module.exports = OnlinerMain;
