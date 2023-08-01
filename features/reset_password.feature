Feature: Testing Reset Password

@reset_password
Scenario: Entering a number that is not registered

    Given I am on the reset password page
    When I enter the phone number +375292222222
    Then I see the form error message "Такой пользователь не зарегистрирован"

@reset_password
Scenario: Entering nothing

    Given I am on the reset password page
    When I enter an empty string
    Then I see the form error message "Укажите ник, e-mail или номер телефона"
