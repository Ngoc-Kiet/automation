export class UserToken {
    static setToken(authToken){
        Cypress.env("token", authToken)
    }
    static getAuthToken(){
        return {
            Authorization : `Bearer ${Cypress.env("token")}`
        }
    }
}