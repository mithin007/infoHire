@login
Feature: Login
    Test the Login  Feature
    
    Background: Launch the url
        Given I launch the "https://practicetestautomation.com/practice-test-login/" url

    Scenario: Positive LogIn test
        Given I type "student" in the "username" field
        And I type "Password123" in the "password" field
        And I click the "submit" button
        And I wait for 2 seconds
        Then I "should" see the URL contains "practicetestautomation.com/logged-in-successfully/" text
        And I "should" see the text "You successfully logged in!" in the ".has-text-align-center" text area
        And I "should" see the "Log out" button is present

    Scenario: Negative username test
        Given I type "incorrectUser" in the "username" field
        And I type "Password123" in the "password" field
        And I click the "submit" button
        Then I "should" see "error" message is displayed
        And I "should" see "error" message is "Your username is invalid!"

    Scenario: Negative password test
        Given I type "student" in the "username" field
        And I type "incorrectPassword" in the "password" field
        And I click the "submit" button
        Then I "should" see "error" message is displayed
        And I "should" see "error" message is "Your password is invalid!"

    Scenario: Negative username & password test
        Given I type "incorrectUser" in the "username" field
        And I type "incorrectPassword" in the "password" field
        And I click the "submit" button
        Then I "should" see "error" message is displayed
        And I "should" see "error" message is "Your username is invalid!"

    Scenario: Submit blank username & password test
        Given I click the "submit" button
        Then I "should" see "error" message is displayed
        And I "should" see "error" message is "Your username is invalid!"

    Scenario: Password field blank with valid username test
        Given I type "student" in the "username" field
        And I click the "submit" button
        Then I "should" see "error" message is displayed
        And I "should" see "error" message is "Your password is invalid!"

    Scenario: Username field blank with valid password test
        Given I type "Password123" in the "password" field
        And I click the "submit" button
        Then I "should" see "error" message is displayed
        And I "should" see "error" message is "Your username is invalid!"

    Scenario: Validate success text after a successful login
        Given I type "student" in the "username" field
        And I type "Password123" in the "password" field
        And I click the "submit" button
        And I wait for 2 seconds
        Then I "should" see the text "Logged In Successfully" in the ".post-title" text area
        And I "should" see the text "Congratulations student. You successfully logged in!" in the ".has-text-align-center" text area