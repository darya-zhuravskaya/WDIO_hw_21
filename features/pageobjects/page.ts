
export default class Page {
    public open(url: string) {
        return browser.url(url)
    }

    public clickOn(link: string) {
        return $(`=${link}`).click()
    }
}
