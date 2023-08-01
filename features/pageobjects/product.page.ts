import { ChainablePromiseElement } from 'webdriverio';

import Page from './page.js';

class ProductPage extends Page {
    public open () {
        return super.open('https://catalog.onliner.by/screwdriver/metabo/powermaxxbsbasic');
    }

    public addToCart() {
        return $('//div[contains(@class, "product-aside__offers-item_primary")]//a[contains(@class, "product-aside__button_cart")]').click()
    }

    public sideBar() {
        return $('//div[contains(@class, "product-recommended__sidebar-overflow")]')
    }
}

export default new ProductPage();
