const {Given, When, Then, setDefaultTimeout} = require('@cucumber/cucumber');
const {Builder, By, until} = require('selenium-webdriver');

setDefaultTimeout(100000);

let driver;

Given('On the sign in page', async function () {
    driver = await new Builder().forBrowser('firefox').build();
    await driver.get('https://www.amazon.com/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fref%3Dnav_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=usflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0');
});/**/

When('Sign fill valid email', async function (){
    await driver.findElement(By.id('ap_email')).click();
    await driver.findElement(By.id('ap_email')).sendKeys('Chutipornkhemakam@gmail.com');
});

When('Sign submit continue', async function (){
    await driver.findElement(By.id('continue')).click();
});

When('Sign fill valid password', async function (){
    await driver.findElement(By.id('ap_password')).click();
    await driver.findElement(By.id('ap_password')).sendKeys('Ama0995748210.');
});

When('Sign submit sign in', async function (){
    await driver.findElement(By.id('signInSubmit')).click();
});

Then('Sign change to verify page', async function (){
    await driver.wait(until.elementsLocated(By.id('cvf-page-content')), 10000); 
    await driver.quit();
}); 
