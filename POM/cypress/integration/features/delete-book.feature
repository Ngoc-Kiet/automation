@delete
Feature: Add Book To Collection
    I would like to add book to collection

    # Background:
    #     Given the user logged into application  

    @delete_book @smoke_test
    Scenario: Delete Book Into Project Successfully 
        Given I am in Delete Book
        When User input Search
            |search|Git Pocket Guide|
        When user click Delete book
        Then Assert Delete Book Successfully