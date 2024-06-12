const { Given, When, Then, Before, setDefaultTimeout } = require('@cucumber/cucumber');
const { Builder, By, until } = require('selenium-webdriver');

setDefaultTimeout(100000);

let driver;

/*
Given('On the register page', async function () {
    driver = await new Builder().forBrowser('firefox').build();
    await driver.get('https://www.amazon.com/');
    await driver.wait(until.elementsLocated(By.className('nav-a')), 30000); 
    await driver.findElement(By.className('nav-a').click());
});/**/

Given('On the register page', async function () {
    driver = await new Builder().forBrowser('firefox').build();
    await driver.get('https://www.amazon.com/ap/register?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2F%3F_encoding%3DUTF8%26ref_%3Dnav_newcust&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=usflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0');
});/**/

/*
When('', async function (){

});/**/

When('Regis fill valid name', async function (){
    await driver.findElement(By.id('ap_customer_name')).click();
    await driver.findElement(By.id('ap_customer_name')).sendKeys('Jutiporn Kh');
});

When('Regis fill blank name', async function (){
    await driver.findElement(By.id('ap_customer_name')).click();
    await driver.findElement(By.id('ap_customer_name')).sendKeys('');
});

When('Regis fill not Eng name', async function (){
    await driver.findElement(By.id('ap_customer_name')).click();
    await driver.findElement(By.id('ap_customer_name')).sendKeys('จุติพร');
});

When('Regis fill special letter name', async function (){
    await driver.findElement(By.id('ap_customer_name')).click();
    await driver.findElement(By.id('ap_customer_name')).sendKeys('Jutiporn Kh*');
});

When('Regis fill valid mobile', async function (){
    await driver.findElement(By.id('ap_email')).click();
    await driver.findElement(By.id('ap_email')).sendKeys('0995748210');
});

When('Regis fill not real mobile', async function (){
    await driver.findElement(By.id('ap_email')).click();
    await driver.findElement(By.id('ap_email')).sendKeys('00');
});

When('Regis fill blank mobile-email', async function (){
    await driver.findElement(By.id('ap_email')).click();
    await driver.findElement(By.id('ap_email')).sendKeys('');
});

When('Regis fill valid email', async function (){
    await driver.findElement(By.id('ap_email')).click();
    await driver.findElement(By.id('ap_email')).sendKeys('mailToTest000@gmail.com');
});

When('Regis fill not real email', async function (){
    await driver.findElement(By.id('ap_email')).click();
    await driver.findElement(By.id('ap_email')).sendKeys(' mailToTest000@gmail');
});

When('Regis fill valid password', async function (){
    await driver.findElement(By.id('ap_password')).click();
    await driver.findElement(By.id('ap_password')).sendKeys('pasTest');
});

When('Regis fill blank password', async function (){
    await driver.findElement(By.id('ap_password')).click();
    await driver.findElement(By.id('ap_password')).sendKeys('');
});

When('Regis fill less password', async function (){
    await driver.findElement(By.id('ap_password')).click();
    await driver.findElement(By.id('ap_password')).sendKeys('pas');
});

When('Regis fill valid re-password', async function (){
    await driver.findElement(By.id('ap_password_check')).click();
    await driver.findElement(By.id('ap_password_check')).sendKeys('pasTest');
});

When('Regis fill blank re-password', async function (){
    await driver.findElement(By.id('ap_password_check')).click();
    await driver.findElement(By.id('ap_password_check')).sendKeys('');
});

When('Regis fill unlike re-password', async function (){
    await driver.findElement(By.id('ap_password_check')).click();
    await driver.findElement(By.id('ap_password_check')).sendKeys('pasTtest');
});

When('Regis submit Verify', async function (){
    await driver.findElement(By.id('continue')).click();
}); 

Then('Change to Verify page', async function (){
    await driver.wait(until.elementsLocated(By.id('cvf-aamation-challenge-iframe')), 10000); 
    await driver.quit();
}); 

Then('Regis all blank alert', async function (){
    await driver.wait(until.elementsLocated(By.id('auth-customerName-missing-alert')), 10000);
    await driver.wait(until.elementsLocated(By.id('auth-email-missing-alert')), 10000);
    await driver.wait(until.elementsLocated(By.id('auth-password-missing-alert')), 10000);

    if(await driver.findElement(By.id('auth-customerName-missing-alert')).isDisplayed() &&
        await driver.findElement(By.id('auth-email-missing-alert')).isDisplayed() &&
        await driver.findElement(By.id('auth-password-missing-alert')).isDisplayed()){
        await driver.quit();
    }
}); 

Then('Regis name alert', async function (){
    await driver.wait(until.elementsLocated(By.id('auth-customerName-missing-alert')), 10000);

    if(await driver.findElement(By.id('auth-customerName-missing-alert')).isDisplayed() &&
        !(await driver.findElement(By.id('auth-email-missing-alert')).isDisplayed()) &&
        !(await driver.findElement(By.id('auth-password-missing-alert')).isDisplayed())){
        await driver.quit();
    }
}); 

Then('Regis blank mobile-email alert', async function (){
    await driver.wait(until.elementsLocated(By.id('auth-email-missing-alert')), 10000);

    if(!(await driver.findElement(By.id('auth-customerName-missing-alert')).isDisplayed()) &&
        await driver.findElement(By.id('auth-email-missing-alert')).isDisplayed() &&
        !(await driver.findElement(By.id('auth-password-missing-alert')).isDisplayed())){
        await driver.quit();
    }
}); 

Then('Regis invalid mobile-email alert', async function (){
    await driver.wait(until.elementsLocated(By.id('auth-email-missing-alert')), 10000);

    if(!(await driver.findElement(By.id('auth-customerName-missing-alert')).isDisplayed()) &&
        await driver.findElement(By.id('auth-email-invalid-claim-alert')).isDisplayed() &&
        !(await driver.findElement(By.id('auth-password-missing-alert')).isDisplayed())){
        await driver.quit();
    }
}); 

Then('Regis blank password alert', async function (){
    await driver.wait(until.elementsLocated(By.id('auth-password-missing-alert')), 10000);

    if(!(await driver.findElement(By.id('auth-customerName-missing-alert')).isDisplayed()) &&
        !(await driver.findElement(By.id('auth-email-missing-alert')).isDisplayed()) &&
        await driver.findElement(By.id('auth-password-missing-alert')).isDisplayed()){
        await driver.quit();
    }
}); 

Then('Regis less password alert', async function (){
    await driver.wait(until.elementsLocated(By.id('auth-password-invalid-password-alert')), 10000);
    await driver.wait(until.elementsLocated(By.id('auth-password-mismatch-alert')), 10000);

    if(!(await driver.findElement(By.id('auth-customerName-missing-alert')).isDisplayed()) &&
        !(await driver.findElement(By.id('auth-email-missing-alert')).isDisplayed()) &&
        await driver.findElement(By.id('auth-password-invalid-password-alert')).isDisplayed() &&
        await driver.findElement(By.id('auth-password-mismatch-alert')).isDisplayed()){
        await driver.quit();
    }
}); 

Then('Regis re-password missing alert', async function (){
    await driver.wait(until.elementsLocated(By.id('auth-password-missing-alert')), 10000);

    if(!(await driver.findElement(By.id('auth-customerName-missing-alert')).isDisplayed()) &&
        !(await driver.findElement(By.id('auth-email-missing-alert')).isDisplayed()) &&
        !(await driver.findElement(By.id('auth-password-missing-alert')).isDisplayed())  &&
        !(await driver.findElement(By.id('auth-password-invalid-password-alert')).isDisplayed())&&
        await driver.findElement(By.id('auth-passwordCheck-missing-alert')).isDisplayed()){
        await driver.quit();
    }
}); 

Then('Regis mismatch re-password alert', async function (){
    await driver.wait(until.elementsLocated(By.id('auth-password-mismatch-alert')), 10000);

    if(!(await driver.findElement(By.id('auth-customerName-missing-alert')).isDisplayed()) &&
        !(await driver.findElement(By.id('auth-email-missing-alert')).isDisplayed()) &&
        !(await driver.findElement(By.id('auth-password-missing-alert')).isDisplayed()) &&
        await driver.findElement(By.id('auth-password-mismatch-alert')).isDisplayed()){
        await driver.quit();
    }
}); 