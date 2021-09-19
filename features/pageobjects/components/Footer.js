'use strict';

class Footer {
        constructor() {

        };
        get Footer() { return ".footer-style" }
        get Sections () {return ('a.footer-style__link:not(.footer-style__link_additional)')};
        get Link () { return ('.footer-style__list li:nth-child(3) a')};

}

module.exports = Footer;