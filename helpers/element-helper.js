const stringHelper = require('./string-helper.js');

const thisModule = {

 
  getElementTexts: async (locator) => {
    const result = [];
    const collection = await $$(locator);

    for (let element of collection) {
      const newItem = Array.of(await element.getText());
      // create two-dimensional array
      result.push(newItem);
    }

    return result;
  },


}

module.exports = thisModule;
