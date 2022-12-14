import { ACCOUNT_ENDPOINT, STATUS_CODE } from "../api_constansts"
import { UserToken } from "../user-token"

export const AuthHelper = {
    generateToken(username , password){
        let url = Cypress.env("apiUrl") + ACCOUNT_ENDPOINT.ENDPOINT_TOKEN_CREATE

        cy.request({
            method: 'POST',
            url: url,
            body:{
                userName: username,
                password:password,
            }
            
        }).then((response) =>{
            UserToken.setToken(response.body.token)
        })
        
    },
    login(userName , password){
        let url = Cypress.env(`apiUrl`)+ACCOUNT_ENDPOINT.ENDPOINT_AUTHORIZED_CREATE
        cy.request({
            method: 'POST',
            url: url,
            body:{
                userName: userName,
                password:password,
            }
        
        }).then((response) =>{
            expect(response.status).equal(STATUS_CODE.RESPONSE_CODE_SUCCESSFUL)
            cy.setCookie("userName",response.body.username)
            cy.setCookie("userID",response.body.userId)
            cy.setCookie("token",response.body.token)
            cy.setCookie("expires",response.body.expires)
            UserToken.setToken(response.body.token)
        });
    }
}