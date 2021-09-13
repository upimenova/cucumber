/**
 * Used for library tests
 */

const OnlinerMain = require('./pages/OnlinerMain');
const ServicesPage = require('./pages/ServicesPage')

module.exports = {
  OnlinerMain: new OnlinerMain(),
  ServicesPage: new ServicesPage()
};