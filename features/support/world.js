'use strict';

var { setWorldConstructor, setDefaultTimeout } = require('cucumber');
var { Builder } = require('selenium-webdriver');
var fs = require('fs');

// Set up chrome driver.
var buildChromeDriver = function() {
  return new Builder().forBrowser("chrome").build();
}

// Build webdriver.
var buildDriver = function() {
  return buildChromeDriver();
}

// Set up screenshot path.
var screenshotPath = "features/screenshots";

// Set up World.
var World = function World() {
  this.driver = buildDriver();
  this.screenshotPath = screenshotPath;

  // Create screenshow directory if not exist.
  if (!fs.existsSync(screenshotPath)) {
    fs.mkdirSync(screenshotPath);
  }
}

// Make isolated World available in all step as "this" variable.
setWorldConstructor(World);

// Set default timeout to 5 seconds.
setDefaultTimeout(5 * 1000);