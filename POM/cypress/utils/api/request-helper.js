export const RequestHelpers = {
    sendGetRequests(endPoint,headers){
        cy.request({
            method: 'GET',
            url: endPoint,
            headers: headers,
            failOnStatusCode: false,
        }).as("getResponse")
    },

    sendPostRequests(endPoint,headers,body){
        cy.request({
            method: 'POST',
            url: endPoint,
            headers: headers,
            body: body,
            failOnStatusCode: false,
        }).as("postResponse")
    },
    sendPutRequests(endPoint,headers,body){
        cy.request({
            method: 'PUT',
            url: endPoint,
            headers: headers,
            body: body,
            failOnStatusCode: false,
        }).as("putResponse")
    },
    sendPatchRequest() {},
    sendDeleteRequests(endPoint,headers,body){
        cy.request({
            method: 'DELETE',
            url: endPoint,
            headers: headers,
            body: body,
            failOnStatusCode: false,
        }).as("deleteResponse")
    },
}