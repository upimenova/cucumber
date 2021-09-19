'use strict';

const { Before, After } = require('@wdio/cucumber-framework');
const cucumberJson = require('wdio-cucumberjs-json-reporter').default;

Before(async () => {
    await browser.deleteCookies();
    await browser.setWindowSize(1400, 1000);
});


Before("@mobile", async () => {
    await browser.deleteCookies();
    await browser.setWindowSize(700, 900);
});
Before("@iPad", async () => {
    await browser.emulateDevice('iPad Mini');
    await browser.enablePerformanceAudits({
      networkThrottling: 'Good 3G',
      cpuThrottling: 4,
      formFactor: 'mobile'
  }) 
});

After(async (scenario) => {
    // if(scenario.result.status === 'FAILED'){
   
    cucumberJson.attach(await browser.takeScreenshot(), 'image/png');

    // }
    console.log('Scenario ' + scenario.pickle.name + ' ' + scenario.result.status)
    await browser.deleteCookies()
    await browser.refresh()
    await browser.pause(2000)
});