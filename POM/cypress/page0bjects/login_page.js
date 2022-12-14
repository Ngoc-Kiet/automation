const LOGIN_URL = "/login"
const TXT_USERNAME_LOCATOR = "#userName";
const TXT_PASSWORD_LOCATOR = "#password";
const BTN_LOGIN_LOCATOR = "#login"
export const LoginPage = {
    navigate(){
        cy.visit(LOGIN_URL)
    },
    inputUserName(username)
    {
        cy.get(TXT_USERNAME_LOCATOR).type(username)
    },
    inputPassword(password)
    {
        cy.get(TXT_PASSWORD_LOCATOR).type(password)
    },
    ClickLoginButton(){
        cy.get(BTN_LOGIN_LOCATOR).click()
    }
}