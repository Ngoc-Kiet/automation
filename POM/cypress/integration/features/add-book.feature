@profile
Feature: Add Book To Collection
    I would like to add book to collection

    # Background:
    #     Given the user logged into application  

    @add_book_to_collection @smoke_test
    Scenario: Add Book Into Project Successfully 
        Given I am in Book Store Page
        When user click book
        When User Click Button Add Book
        And User input Search
            |search|Git Pocket Guide|
        Then User Add Book Successfully