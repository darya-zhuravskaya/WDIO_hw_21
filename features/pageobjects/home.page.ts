import { ChainablePromiseElement } from 'webdriverio';

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    public open () {
        return super.open('https://www.onliner.by');
    }
}

export default new HomePage();
