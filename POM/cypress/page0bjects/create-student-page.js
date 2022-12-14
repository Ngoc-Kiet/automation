const LOGIN_URL = "/automation-practice-form"
const TXT_FIRSTNAME_LOCATOR = "#firstName"
const TXT_LASTNAME_LOCATOR = "#lastName"
const TXT_USEREMAIL_LOCATOR = "#userEmail"
const TXT_GENDER_LOCATOR    ="//input[@value='Male']"
const TXT_NUMBER_LOCATOR    = "#userNumber"
const BTN_START_DATE_LOCATOR = "#dateOfBirthInput"
const BTN_SUBMIT_LOCATOR = "#submit"
const TXT_CURRENT_ADDRESS_LOCATOR = "#currentAddress"
const TXT_SUBJECT_LOCATOR = "#subjectsInput"
const TXT_STATE_LOCATOR = "#state"
const TXT_CITY_LOCATOR  ="#city"
export const CreateStudent = {
    navigate(){
        cy.visit(LOGIN_URL)
    },
    inputFristname(firstname)
    {
        cy.get(TXT_FIRSTNAME_LOCATOR).type(firstname)
    },
    inputLastname(lastname)
    {
        cy.get(TXT_LASTNAME_LOCATOR).type(lastname)
    },
    inputUseremail(useremail)
    {
        cy.get(TXT_USEREMAIL_LOCATOR ).type(useremail)
    },
    inputGender(gender)
    {
        cy.xpath(`//label[contains(text(),'${gender}')]`).click()
    },
    inputHobbies(hobbies)
    {
        cy.xpath(`//label[contains(text(),'${hobbies}')]`).click()
    },
    inputNumberPhone(phonenumber)
    {
        cy.get(TXT_NUMBER_LOCATOR).type(phonenumber)
    },
    selectDateOfBirth(day,month) {
        cy.get(BTN_START_DATE_LOCATOR).click();
        cy.xpath(`//div[.="${day}"]`).click();
        
    },
    selectFileImage(){
        cy.get('#uploadPicture').attachFile({ filePath:"user.json",fileName: 'photo.jpg', encoding: 'utf-8' })
    },
    inputCurrentAddress(address){
        cy.get(TXT_CURRENT_ADDRESS_LOCATOR).type(address)
    },
    inputSubject(subject){
        cy.get(TXT_SUBJECT_LOCATOR).type(subject)
        cy.xpath(`//div[.='${subject}']`).last().click()
    },
    SelectSubject(subject){
        cy.xpath(`//div[.='${subject}']`).select(subject)
    },
    selectState(state){
        cy.get(TXT_STATE_LOCATOR).type(state)
        cy.xpath(`//div[.='${state}']`).last().click()
    },
    selectCity(city){
        cy.get(TXT_CITY_LOCATOR).type(city)
        cy.xpath(`//div[.='${city}']`).last().click()
    },
    ClickSubmitButton(){
        cy.get(BTN_SUBMIT_LOCATOR).click()
    }
}