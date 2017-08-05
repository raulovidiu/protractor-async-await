'use strict';

const SpecReporter = require('jasmine-spec-reporter');

module.exports.config = {
  directConnect: true,

  SELENIUM_PROMISE_MANAGER: false,

  specs: ['specs/todo-mvc.spec.js'],

  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'args': ['--disable-extensions', '--disable-infobars']
    }
  },

  onPrepare() {
    browser.driver.manage().window().maximize();
    browser.ignoreSynchronization = true;

    jasmine.getEnv().addReporter(new SpecReporter({
      displayFailuresSummary: true,
      displayFailedSpec: true,
      displaySuiteNumber: true,
      displaySpecDuration: true
    }));
  }
};
