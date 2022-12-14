import { Before } from "cypress-cucumber-preprocessor/steps"
import { BookStoreHelper } from "../../../utils/api/data-preparation/book-store-helper"
import { UserToken }  from "../../../utils/api/user-token"

Before({tags : '@delete_book'}, ()=>{
    cy.loginByApi()
    cy.get("@userinfo").then((user)=>{
        BookStoreHelper.AddBook(
            UserToken.getAuthToken(),
            user.userid,
            // Cypress.env("isbn"),
            user.isbn 
            )
    })
})
