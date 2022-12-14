const URL = '/profile'
const TXT_SEARCH_LOCATOR ="#searchBox"
const BTN_SEARCH_LOCATOR = "//span[@class='input-group-text']"
const BTN_ADD_BOOK_LOCATOR = "//button[.='Add To Your Collection']"
export const SearchBook = {
    navigate(){
        cy.visit(URL)
    },
    inputSearch(searchbook){
        cy.get(TXT_SEARCH_LOCATOR).type(searchbook)
    },
    clickSearchBook(){
        cy.xpath(BTN_SEARCH_LOCATOR).click()
    },
    // clickButtonOk(){
    //     cy.xpath(BTN_OK_LOCATOR).click()
    // }
}