import { ChainablePromiseElement } from 'webdriverio';

import Page from './page.js';

const xpath = {
    cartButton: '//div[contains(@class, "product-aside__offers-item_primary")]//a[contains(@class, "product-aside__button_cart")]',
    sideBar: '//div[contains(@class, "product-recommended__sidebar-overflow")]'
}

class ProductPage extends Page {
    public open () {
        return super.open('https://catalog.onliner.by/screwdriver/metabo/powermaxxbsbasic');
    }

    public addToCart() {
        return $(xpath.cartButton).click()
    }

    public sideBar() {
        return $(xpath.sideBar)
    }
}

export default new ProductPage();
