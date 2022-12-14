import { Before } from "cypress-cucumber-preprocessor/steps"
import { BookStoreHelper } from "../../../utils/api/data-preparation/book-store-helper"
import { UserToken }  from "../../../utils/api/user-token"

Before({tags : '@add_book_to_collection'}, ()=>{
    cy.loginByApi()
    cy.get("@userinfo").then((user)=>{
        BookStoreHelper.DeleteALLBook(
            UserToken.getAuthToken(),
            user.userid,
            )
    })
})
