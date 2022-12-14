import{Given,Then,And,When} from "cypress-cucumber-preprocessor/steps"
import { BookStorePage } from "../../../page0bjects/book-store-page"
import { NavigationPage } from "../../../page0bjects/navigation-page"
import { SearchBook } from "../../../page0bjects/search-book-page"

Given ("I am in Book Store Page" , ()=>{
    BookStorePage.navigate()
})
// When("User input Search ", (dataTable)=>{
    
//     let element = dataTable.rowsHash()
//     cy.log(element)
//     if(element.title){
//         BookStorePage.inputSearch(element.title)
//     }
    
// })
When("user click book",()=>{
    BookStorePage.clickBook()
})
When("User Click Button Add Book" , ()=>{
    BookStorePage.clickAddBook()
    cy.on('window:alert',(txt)=>{
        expect(txt).to.contains('Book added to your collection.');
     })
    
})
And("User input Search",(dataTable)=>{
        BookStorePage.clickProfileButton()
        let element= dataTable.rowsHash()
        console.log(element)
        SearchBook.inputSearch(element.search)
        SearchBook.clickSearchBook()
    
        cy.wrap(element).as("respone")
})
Then("User Add Book Successfully" , ()=>{
    cy.get("@respone").then((res)=>{
        cy.log(res.search)
        NavigationPage.assertAddBook(res.search)
        
    })
})