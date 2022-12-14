const URL = '/books'
const CLICK_BOOK_LOCATOR ="//a[.='Git Pocket Guide']"
const BTN_SEARCH_LOCATOR = "#searchBox"
const BTN_ADD_BOOK_LOCATOR = "//button[.='Add To Your Collection']"
const BTN_PROFILE_LOCATOR = "//span[.='Profile']"
export const BookStorePage = {
    navigate(){
        cy.visit(URL)
    },
    inputSearch(searchbook){
        cy.get(BTN_SEARCH_LOCATOR).type(searchbook)
    },
    clickBook(){
        cy.xpath(CLICK_BOOK_LOCATOR).click()
    },
    clickAddBook(){
        cy.xpath(BTN_ADD_BOOK_LOCATOR).click()
    },
    clickProfileButton(){
        cy.xpath(BTN_PROFILE_LOCATOR).click()
    }
}