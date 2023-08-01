import { ChainablePromiseElement } from 'webdriverio';

import Page from './page.js';


class HomePage extends Page {
    public open () {
        return super.open('https://www.onliner.by');
    }
}

export default new HomePage();
