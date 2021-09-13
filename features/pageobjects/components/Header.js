'use strict';

class Header {
	constructor() {

	};
        get Header  () {return ('.b-top-actions')};
        get HeaderLogo () {return ('.b-top-logo a')};
        get SearchField (){ return ('input.fast-search__input')};
        get LoginButton () { return $('=Вход')};

}

module.exports = Header;