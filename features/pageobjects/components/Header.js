'use strict';

class Header {
	constructor() {

	};
        get Header  () {return ('.b-top-actions')};
        get HeaderLogo () {return ('.b-top-logo a')};
        get SearchField (){ return ('input.fast-search__input')};
        get LoginButton () { return $('=Вход')};
        get SecondaryNav () { return ('.project-navigation__list_secondary a:not(.project-navigation__link_primary)')};
        get Klever () { return ('//nav[not(@style=\'display:none\')]/a')};
        get MobileMenu () { return ('.header-style__toggle')};
        get MobileMenuItems () { return ('.header-style__middle')};
        get Samsung () { return ('.schema-tags__item')};
        

}

module.exports = Header;