Feature: Testing home page

@home
Scenario Outline: Clicking navingation links

    Given I am on the home page
    When I click on <link>
    Then I should be redirected on the subdomain <subdomain>
    
    Examples:
      | link          | subdomain |
      | Каталог       | catalog   |
      | Автобарахолка | ab        |
