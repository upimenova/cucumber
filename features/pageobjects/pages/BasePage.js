'use strict';

const Header = require('../components/Header');
const Services = require('../components/Services');
const Footer = require('../components/Footer');

class BasePage {
        constructor() {
                this.Header = new Header();
                this.Services = new Services();
                this.Footer = new Footer();
        };

}

module.exports = BasePage;
