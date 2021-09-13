

const { Given, When, Then } = require('@wdio/cucumber-framework');



Given('User navigates to {landing-url}', function (url) {
    const currentUrl = browser.getUrl();
    // maybe we are already there?
    if (currentUrl !== url) {
      return browser.url(url);
    }
  });
  
When(`I click {locator} element`, { wrapperOptions: { retry: 2 } }, async (element) => {
    await $(element).click();
});

When('I sleep {int} second(s)', async (number) => {
    let seconds = parseFloat(number);
    return await browser.pause(Math.floor(seconds * 1000));
});


When(`I enter {string} text into {locator} element`, async (givenText, element) => {
    return await $(element).setValue(givenText);
});

When(`I delete symbol in element`, async () => {
  
  return await browser.keys('\uE003');
});

When(`I switch to {locator} element`, async (element) => {
  return browser.waitUntil(async () => { return (await $(element).isFocused()) }).then(() => {
  }, (error => {
    return $(element).isFocused().then(url => {
      throw new Error(`Element is not focused`);
    });
  }));
});

When(`I hover {locator} element`, async (element) => {
  return browser.waitUntil(async () => { return (await browser.moveToObject($(element))) }).then(() => {
  }, (error => {
    return browser.moveToObject($(element)).then(url => {
      throw new Error(`Element is not hovered`);
    });
  }));
});
