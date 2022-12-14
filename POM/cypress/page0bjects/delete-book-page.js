const URL = '/profile'
const CLICK_DELETE_LOCATOR ="//span[@title='Delete']"
const BTN_OK_LOCATOR = "//button[.='OK']"
const BTN_ADD_BOOK_LOCATOR = "//button[.='Add To Your Collection']"
export const DeleteBook = {
    navigate(){
        cy.visit(URL)
    },
    clickDeleteBook(){
        cy.xpath(CLICK_DELETE_LOCATOR).click()
    },
    clickButtonOk(){
        cy.xpath(BTN_OK_LOCATOR).click()
    }
}