import { Given, When, Then } from '@wdio/cucumber-framework';

import HomePage from '../pageobjects/home.page.js';
import ResetPasswordPage from '../pageobjects/reset_password.page.js';
import ProductPage from '../pageobjects/product.page.js';
import { logger } from '../../log.config.js';

Given(/^I am on the home page$/, async () => {
    logger.info("Opening home page")
    await HomePage.open();
    logger.info("Home page opened")
});

When(/^I click on (.+)$/, async (link) => {
    logger.info(`Clicking on the link ${link}` )
    await HomePage.clickOn(link)
    logger.info(`Clicked on the link ${link}` )
});

Then(/^I should be redirected on the subdomain (.*)$/, async (subdomain) => {
    logger.info(`Checking redirect to the subdomain ${subdomain}`)
    expect(await browser.getUrl()).toContain(subdomain);
});

// Reset Password test
Given(/^I am on the reset password page$/, async () => {
    logger.info("Opening reset password page")
    await ResetPasswordPage.open();
    logger.info("Reset password page is opened")
});


When(/^I enter the phone number (\+\w+)$/, async (phone) => {
    logger.info(`Entering phone number ${phone}`)
    await ResetPasswordPage.enterPhone(phone);
    logger.info("Phone number is entered")
    logger.info("Clicking on submit Button")
    await ResetPasswordPage.submitButton().click();
    logger.info("Clicked on submit Button")
});

When(/^I enter an empty string$/, async () => {
    logger.info("Entering empty string")
    await ResetPasswordPage.enterPhone("");
    logger.info("Empty string is entered")
    logger.info("Clicking on submit Button")
    await ResetPasswordPage.submitButton().click();
    logger.info("Clicked on submit Button")
    
});

Then(/^I see the form error message "(.+)"$/, async (message) => {
    expect(await ResetPasswordPage.errorMessage()).toContain(message);
});

// Product Page Test
Given(/^I am on the product page$/, async () => {
    logger.info("Opening product page")
    await ProductPage.open();
    logger.info("Product page is opened")

});

When(/^I add the product to the cart$/, async () => {
    logger.info("Adding product to the cart")
    await ProductPage.addToCart();
    await browser.pause(1500);
    logger.info("Product is added to the cart")
});

Then(/^I see the following text on the sidebar "(.+)"$/, async (text) => {
    expect(await ProductPage.sideBar().getText()).toContain(text);
});
