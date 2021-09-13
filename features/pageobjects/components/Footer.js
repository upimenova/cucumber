'use strict';

class Footer {
        constructor() {

        };
        get Footer() { return "footer#main-footer" }
        get AboutUs() { return '.menu-item-197188'};
        get News() { return '.menu-item-191665' };

        get AboutItems() { return `${this.AboutUs} .sub-menu li a[href^=https]` };
        get NewsItems() { return `${this.News} .sub-menu li a[href^=https]`};


}

module.exports = Footer;