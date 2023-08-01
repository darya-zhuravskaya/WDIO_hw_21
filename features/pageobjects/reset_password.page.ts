import { ChainablePromiseElement } from 'webdriverio';

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ResetPassword extends Page {
    public open () {
        return super.open('https://profile.onliner.by/recover-password');
    }

    public enterPhone(phone: string) {
        return $('//form//input').setValue(phone)
    }

    public submitButton() {
        return $('button[type="submit"]')
    }

    public errorMessage() {
        return $('//div[contains(@class, "auth-form__description_error")]').getText()
    }
}

export default new ResetPassword();
