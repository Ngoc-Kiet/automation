
Feature: Login
    As a user , I would like to log into the application
        

    Scenario: Login
        Given I am in Login Page
        When I enter data into the following fields
            | username  | password    |
            | kiet      |Kiet@123     |
        And I click on Login button
        Then the username "kiet" is shown correctly
       