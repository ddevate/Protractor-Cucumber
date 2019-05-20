// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './Test/e2e/**/*.feature'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  //baseUrl: 'http://localhost:4200/',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    require: ['./test/e2e/**/*.steps.ts'],
    tags: [''],
    strict: true,
    format: [
    'progress',
    'json:./test/report/results.json'
    ],
    dryRun: false,
    compiler: [],
    }, 
    plugins: [{
      package: 'protractor-multiple-cucumber-html-reporter-plugin',
      options: {
      automaticallyGenerateReport: true,
      removeExistingJsonReportFile: true,
      openReportInBrowser: true,
      removeOriginalJsonReportFile: true
      }
      }],
      capabilities: {'browserName': 'chrome'},
      directConnect: true,
      baseUrl: 'http://www.way2automation.com/angularjs-protractor/banking/#/login/',
      jasmineNodeOpts: {
      showColors: true,
      defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
    project: './test/e2e/tsconfig.e2e.json'
    });
    //jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
    }
};