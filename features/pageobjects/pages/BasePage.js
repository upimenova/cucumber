'use strict';

const Header = require('../components/Header');
const Services = require('../components/Services');

class BasePage {
        constructor() {
                this.Header = new Header();
                this.Services = new Services();
        };

}

module.exports = BasePage;
