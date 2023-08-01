Feature: Testing Product Page

@product_page
Scenario: Adding product to cart

    Given I am on the product page
    When I add the product to the cart
    Then I see the following text on the sidebar "Товар добавлен в корзину"
