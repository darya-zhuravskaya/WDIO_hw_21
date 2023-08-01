import { ChainablePromiseElement } from 'webdriverio';

import Page from './page.js';

const xpath = {
    phoneInput: '//form//input',
    submitButton: 'button[type="submit"]',
    errorMessageBlock: '//div[contains(@class, "auth-form__description_error")]'
}
class ResetPassword extends Page {
    public open () {
        return super.open('https://profile.onliner.by/recover-password');
    }

    public enterPhone(phone: string) {
        return $(xpath.phoneInput).setValue(phone)
    }

    public submitButton() {
        return $(xpath.submitButton)
    }

    public errorMessage() {
        return $(xpath.errorMessageBlock).getText()
    }
}

export default new ResetPassword();
