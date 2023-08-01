import { Given, When, Then } from '@wdio/cucumber-framework';

import HomePage from '../pageobjects/home.page.js';
import ResetPasswordPage from '../pageobjects/reset_password.page.js';

Given(/^I am on the home page$/, async () => {
    await HomePage.open();
});

When(/^I click on (.+)$/, async (link) => {
    await HomePage.clickOn(link)
});

Then(/^I should be redirected on the subdomain (.*)$/, async (subodmain) => {
    expect(await browser.getUrl()).toContain(subodmain);
});

Given(/^I am on the reset password page$/, async () => {
    await ResetPasswordPage.open();
});

When(/^I enter the phone number (\+\w+)$/, async (phone) => {
    await ResetPasswordPage.enterPhone(phone);
    await ResetPasswordPage.submitButton().click();
    await browser.pause(3000)
});

Then(/^I see the form error message "(.+)"$/, async (message) => {
    expect(await ResetPasswordPage.errorMessage()).toContain(message);
});