let HtmlScreenshotReporter = require('C:/Users/Admin/AppData/Roaming/npm/node_modules/protractor-jasmine2-screenshot-reporter');

let reporter = new HtmlScreenshotReporter({
   dest: 'target/screenshots',
   filename: 'my-report.html'
});

// An example configuration file.
exports.config = {
   directConnect: true,

   // Capabilities to be passed to the webdriver instance.
   capabilities: {
      'browserName': 'chrome'
    //  'browserName': 'firefox'
   },

   // multiCapabilities: [{
   //    'browserName': 'firefox'
   // },
   // {
   //    'browserName': 'chrome'
   // }],

   // Framework to use. Jasmine is recommended.
   framework: 'jasmine',

   // Spec patterns are relative to current working directory when
   // protractor is called.
   // specs: ['../tests/example_spec.js'],
   // specs: ['../tests/calculator_test_spec.js'],
   // specs: ['../tests/DemoJasmineTestBlock.js'],
   // specs: ['../tests/Demo_Nonangular_spec.js'],
   specs: ['../tests/MouseOverHandling.js'],


   // Options to be passed to Jasmine.
   jasmineNodeOpts: {
      defaultTimeoutInterval: 30000
   },

   // Setup the report before any tests start
   beforeLaunch: function () {
      return new Promise(function (resolve) {
         reporter.beforeLaunch(resolve);
      });
   },
   // Assign the test reporter to each running instance
   onPrepare: function () {
      // To get prepare for screenshot of every test
      jasmine.getEnv().addReporter(reporter);

      // To get prapare for allure report of every test
      let AllureReporter = require('C:/Users/Admin/AppData/Roaming/npm/node_modules/jasmine-allure-reporter');
      jasmine.getEnv().addReporter(new AllureReporter({
         resultsDir: 'allure-results'
      }));

      // To get prapare for HTML Report of every test
      let jasmineReporters = require('C:/Users/Admin/AppData/Roaming/npm/node_modules/jasmine-reporters');
      jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
         consolidateAll: true,
         savePath: './',
         filePrefix: 'xmlresults'
      }));

      // To get prapare for screenshot of only failed testcase
      let fs = require('C:/Users/Admin/AppData/Roaming/npm/node_modules/fs-extra');

      fs.emptyDir('screenshots/', function (err) {
         console.log(err);
      });

      jasmine.getEnv().addReporter({
         specDone: function (result) {
            if (result.status == 'failed') {
               browser.getCapabilities().then(function (caps) {
                  var browserName = caps.get('browserName');

                  browser.takeScreenshot().then(function (png) {
                     var stream = fs.createWriteStream('screenshots/' + browserName + '-' + result.fullName + '.png');
                     stream.write(new Buffer(png, 'base64'));
                     stream.end();
                  });
               });
            }
         }
      });
   },

   // Close the report after all tests finish
   afterLaunch: function (exitCode) {
      return new Promise(function (resolve) {
         reporter.afterLaunch(resolve.bind(this, exitCode));
      });
   },

   //HTMLReport called once tests are finished
   onComplete: function () {
      let browserName, browserVersion;
      let capsPromise = browser.getCapabilities();

      capsPromise.then(function (caps) {
         browserName = caps.get('browserName');
         browserVersion = caps.get('version');
         platform = caps.get('platform');

         let HTMLReport = require('C:/Users/Admin/AppData/Roaming/npm/node_modules/protractor-html-reporter-2');

         testConfig = {
            reportTitle: 'Protractor Test Execution Report',
            outputPath: './',
            outputFilename: 'ProtractorTestReport',
            screenshotPath: './screenshots',
            testBrowser: browserName,
            browserVersion: browserVersion,
            modifiedSuiteName: false,
            screenshotsOnlyOnFailure: true,
            testPlatform: platform
         };
         new HTMLReport().from('xmlresults.xml', testConfig);
      });
   }
};