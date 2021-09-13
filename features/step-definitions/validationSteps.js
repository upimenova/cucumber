

const { Given, When, Then } = require('@wdio/cucumber-framework');
const expectChai = require('chai').expect;

const helper = require('../../helpers/element-helper.js');


Then('Page title is equal to {string}', async  (value) =>{
    await  expect(browser).toHaveTitle(value)
  
    });
    
  
    Then('{detail} list {locator} contains values:', async (_, locator, expectedTable) => {
      const expected = expectedTable.raw();
      
      
      const actual = await helper.getElementTexts(locator);
  
             return expectChai(actual).to.deep.include.members(expected);
  
  
    });
    Then('Input value of {locator} element contains {string} text', async  (locator, text) =>{
   await   expect( $(locator)).toHaveValue(text)
    
      });

      Then('Page URL is equal to {landing-url}', async (value) => {
        return browser.waitUntil(async () => { return (await browser.getUrl()) === value; }).then(() => {
        }, (error => {
          return browser.getUrl().then(url => {
            throw new Error(`Expected url: ${value} is not loaded; Current url: ${url}`);
          });
        }));
      });
      

      Then('Page URL contains {landing-url} with path {string}', async (url, urlPath) => {
        const fullURL = url + urlPath;
        return browser.waitUntil(async () => { return (await browser.getUrl()).includes(fullURL); }).then(() => {
        }, (error => {
          return browser.getUrl().then(currentUrl => {
            throw new Error(`Current url: ${currentUrl} doesn't contain expected url: ${fullURL}`);
          });
        }));
      });
      



Then(`I wait until {locator} element is visible`, async (element) => {
  await expect($(element)).toBeDisplayed()

});

Then(`I expect {locator} element css property {property} is {value}`, async (element, attrName, expectedValue) => {
 
  await expect(($(element)).getCssValue(attrName)).toBe(expectedValue);
});

Then('Items of {locator} element contain {string} text', async  (locator, text) =>{
  return expect($$(locator)).toHaveText(text)
   
     });

     Then('Page URL contains {string}', async (urlPath) => {
      return browser.waitUntil(async () => { return (await browser.getUrl()).includes(urlPath); }).then(() => {
      }, (error => {
        return browser.getUrl().then(currentUrl => {
          throw new Error(`Current url: ${currentUrl} doesn't contain expected url: ${urlPath}`);
        });
      }));
    });
