const LBL_USER_EMAIL_LOCATTOR = "//tbody//tr[3]//td[2]"
const LBL_NAME_STUDENTS_LOCATTOR = "//tbody//tr[1]//td[2]"
const LBL_EMAIL_LOCATTOR = "//tbody//tr[2]//td[2]"
const LBL_MOBILE_LOCATTOR = "//tbody//tr[4]//td[2]"
const LBLCURRENT_ADDRESS_LOCATTOR = "//tbody//tr[9]//td[2]"
const LBL_SUBJECT_LOCATTOR = "//tbody//tr[6]//td[2]"
const LBL_HOBBIES_LOCATTOR = "//tbody//tr[7]//td[2]"
const LBL_STATE_CITY_LOCATTOR = "//tbody//tr[10]//td[2]"
const LBL_SEARCH_LOCATOR = "//div[@class='rt-tbody']"
const LBL_USERNAME_LOCATOR = `#userName-value`
export const NavigationPage = {
    assertUserName(){
        return cy.get(LBL_USERNAME_LOCATOR)
    },
    assertGender(){
        return  cy.xpath(LBL_USER_EMAIL_LOCATTOR)
    },
    assertNameStudent(){
        return  cy.xpath(LBL_NAME_STUDENTS_LOCATTOR)
    },
    assertEmail(){
        return  cy.xpath(LBL_EMAIL_LOCATTOR)
    },
    assertMobile(){
        return  cy.xpath(LBL_MOBILE_LOCATTOR)
    },
    assertCurrentAddress(){
        return  cy.xpath(LBLCURRENT_ADDRESS_LOCATTOR)
    },
    assertSubject(){
        return  cy.xpath(LBL_SUBJECT_LOCATTOR)
    },
    assertHobbies(){
        return  cy.xpath(LBL_HOBBIES_LOCATTOR)
    },
    assertStateCity(){
        return  cy.xpath(LBL_STATE_CITY_LOCATTOR)
    },
    assertDeleteBook(search)
       
    {
        cy.log(search)
        let Count_List = cy.xpath(LBL_SEARCH_LOCATOR).find("div")
        .its("length")
        .then((count) =>
         {
            for (let i = 1; i <= count; i++) 
            {
                cy.xpath(`//div[@class='rt-tbody']/div[${i}]//a`).should('not.exist')
            }
        })
    },
    assertAddBook(search)
    {
        cy.log(search)
        let Count_List = cy.xpath(LBL_SEARCH_LOCATOR).find("a")
        .its("length")
        .then((count) =>
         {
            for (let i = 1; i <= count; i++) 
            {
                cy.xpath(`//div[@class='rt-tbody']/div[${i}]//a`).invoke('text').should('contains',search)
            }
        })
    }
}
