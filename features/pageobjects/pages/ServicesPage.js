const BasePage = require('./BasePage');

class ServicesPage extends BasePage {

    constructor() {
        super()
    }
    get ShareButtons() { return 'a.project-navigation__button_subsidiary'};

}

module.exports = ServicesPage;
