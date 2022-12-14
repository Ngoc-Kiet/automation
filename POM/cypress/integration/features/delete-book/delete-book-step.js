import{Given,Then,And,When} from "cypress-cucumber-preprocessor/steps"

import { DeleteBook } from "../../../page0bjects/delete-book-page"
import { NavigationPage } from "../../../page0bjects/navigation-page"
import { SearchBook } from "../../../page0bjects/search-book-page"

Given ("I am in Delete Book" , ()=>{
    DeleteBook.navigate()
})
When("User input Search",(dataTable)=>{
    let element= dataTable.rowsHash()
    console.log(element)
    SearchBook.inputSearch(element.search)
    SearchBook.clickSearchBook()

    cy.wrap(element).as("respone")
})
When("user click Delete book",()=>{
    DeleteBook.clickDeleteBook()
    DeleteBook.clickButtonOk()
})
Then("Assert Delete Book Successfully",()=>{
    cy.get("@respone").then((res)=>{
        cy.log(res.search)
        NavigationPage.assertDeleteBook(res.search)
        
    })
})