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
    await HomePage.clickOn(link)
});

Then(/^I should be redirected on the subdomain (.*)$/, async (subodmain) => {
    expect(await browser.getUrl()).toContain(subodmain);
});

// Reset Password test
Given(/^I am on the reset password page$/, async () => {
    await ResetPasswordPage.open();
});


When(/^I enter the phone number (\+\w+)$/, async (phone) => {
    await ResetPasswordPage.enterPhone(phone);
    await ResetPasswordPage.submitButton().click();
});

When(/^I enter an empty string$/, async () => {
    await ResetPasswordPage.enterPhone("");
    await ResetPasswordPage.submitButton().click();
});

Then(/^I see the form error message "(.+)"$/, async (message) => {
    expect(await ResetPasswordPage.errorMessage()).toContain(message);
});

// Product Page Test
Given(/^I am on the product page$/, async () => {
    await ProductPage.open();
    // await browser.pause(1500);
});

When(/^I add the product to the cart$/, async () => {
    await ProductPage.addToCart();
    await browser.pause(1500);
});

Then(/^I see the following text on the sidebar "(.+)"$/, async (text) => {
    expect(await ProductPage.sideBar().getText()).toContain(text);
});
