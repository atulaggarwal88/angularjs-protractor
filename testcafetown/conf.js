// An example configuration file.
exports.config = {
	//Selenium server address
  //seleniumAddress: 'http://localhost:4444/wd/hub',

  //directConnect true enables conf.js files to be run without starting websriver-manager
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['cafetown_spec.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
	showColors: true,
    defaultTimeoutInterval: 30000
  }
};
