
Feature: Create Student
    As a user , I would like to Create Student
        
    Background: 
        Given I am Create Student
      
        
    Scenario Outline: Create Student Successfully with all fields
        
        When User input into fields
            |firstname     |lastname |useremail|gender|phonenumber|day|month                           |address  |subject  |hobbies|state    |city|
            |<firstname>   |<lastname>     |<lastname>      | <gender> |<phonenumber> |<day> |<month>  |<address>|<subject>|<hobbies>|<state>|<city>|
        And I click on Submit button
        Then assert project is shown

    Examples:
            |firstname     |lastname |useremail|gender|phonenumber|day|month|year |address|subject|hobbies|state|city|
            |abc   |ngoc     |abc      | Male |0984648592 |27 |June  |2022  |abc          |Maths  |Sports|NCR|Noida|
            |abc   |ngoc     |abc      | Male |0984648592 |27 |June  |2022  |             |       |      |NCR|Noida|