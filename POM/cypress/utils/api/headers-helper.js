export const HeadersHelpers = {
    getHeaders(){
        let headers={
            "Content-Type": "application/json",
            Authorization: "Bearer " + Cypress.env("token"),
        }
        return headers
    },
    getHeadersBook(){
        let headersBook={
            "Content-Type": "application/json",
        }
        return headersBook
        
    },
}