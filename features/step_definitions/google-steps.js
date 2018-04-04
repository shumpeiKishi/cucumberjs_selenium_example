'use strict';

var { Given, When, Then} = require('cucumber');
var { By, until, Key } = require('selenium-webdriver');
var { expect } = require('chai');
var fs = require('fs');
var path = require('path');

Given('I visit google', function (next) {
  this.driver.get('http://google.com')
    .then(() => next())
    .catch(err => console.log(err));
});

When(/^I search for "([^"]*)"$/, function (searchQuery, next) {
  this.driver.findElement(By.name('q')).sendKeys(searchQuery, Key.RETURN)
    .then(() => next())
    .catch(err => console.log(err));
});

Then(/^I should see some results$/, function (next) {
  this.driver.findElements(By.css('.g'))
    .then((elements) => {
      expect(elements.length).not.to.equal(0);
      next();
    })
    .catch(err => {console.log(err);});
});

Then('I take a screenshot', function(next) {
  this.driver.takeScreenshot()
    .then((imgData) => {
      fs.writeFile(path.join(this.screenshotPath, this.safeScenarioName + ".png"), imgData, 'base64', function (err) {
        if (err) console.log(err);
      });
    })
    .then(() => next())
    .catch(err => { console.log(err)}); 
});