'use strict';

class Services{
	constructor (){

	};
        
        get Subcontractors () {return ('.project-navigation__part_1 li:nth-of-type(2) a')};
        get FilterItem () {return ('.service-form .service-form__row:nth-of-type(3) .service-form__field > div:nth-child(1) li:nth-of-type(2)')};
        get SelectedFilter () {return ('.service-tags__button')};
        get Sections () {return ('.service-form__collapse a.service-form__link')};
}

module.exports = Services;