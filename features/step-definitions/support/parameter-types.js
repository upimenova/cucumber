// const { defineParameterType } = require('cucumber');
const { defineParameterType } = require('@wdio/cucumber-framework');
const userData = require('../../../data/user-data');

const page = require('../../pageobjects/pages-enum');


/** 
* @STRING_REGEXP 
* Regular expression for reading value inside the double quotes 
* double quotes are excluded from result 
* will work in case string contains more than one value inside the double quotes 
* 
* Examples: 
* 
* Code field "#form-question-code" is displayed 
* Preview table ".form-question-preview" with text "Question preview" is displayed 
*/
const STRING_REGEXP = /"([^"\\]*(\\.[^"\\]*)*)"/;

/** 
* Used for adding description to elements. 
*/
defineParameterType({
    regexp: /[^"]*/,
    name: 'detail',
    useForSnippets: false
});

/** 
* Used for CSS locators. 
* Json-nesting can be any. It depends on project needs. 
* But first parameter should obligatory be page name from page-enum.js. 
* Last parameter should obligatory be element name. 
* 
* @return {array|string} element
*/
defineParameterType({
    regexp: STRING_REGEXP,
    name: 'locator',
    useForSnippets: true,
    transformer: (string) => {
      if (string.indexOf('|') !== -1) {
        const array = string.split('|');
        const pageName = array[0];
        const element = array[array.length - 1];
        let objectPath = page[pageName];
  
        for (let i = 1; i < array.length - 1; i++) {
          objectPath = objectPath[array[i]];
        }
  
        return objectPath[element];
      }
  
      return string;
    }
  });

    defineParameterType({
      regexp: STRING_REGEXP,
      name: 'landing-url',
      useForSnippets: false,
      transformer: (string) => {
        if (string.indexOf('http') === 0) {
          return string;
        }

        return userData.urls[string];
      }

});