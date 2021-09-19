const { Given, When } = require('@wdio/cucumber-framework');
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

When(`I click {locator} new element`, async (element) => {
  return browser.execute("document.querySelector('" + element + "').click()");
});

When(`I hover {locator} element`, async (element) => {
  await browser.execute("document.querySelector('" + element + "').addEventListener('mouseover', function() {console.log('Event triggered');})");
});

When(`I scroll the page to {locator}`, async (element) => {
  await browser.execute("document.querySelector('" + element + "').scrollIntoView()");
});

When(`I wait for {locator} element to load`, async (locator) => {
  await browser.execute("document.querySelector('" + locator + "').waitForExist()");
});
