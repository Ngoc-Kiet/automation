import { BOOKSTORE_ENDPOINT } from "../api_constansts"
import { RequestHelpers } from "../request-helper"

export const BookStoreHelper = {
    DeleteBook(headers,isbn,userId){
        let endpoint = Cypress.env("apiUrl")+ BOOKSTORE_ENDPOINT.ENDPOINT_BOOK_DELETE;
        let body = {
            "isbn":isbn,
            
            "userId":userId
        }
        RequestHelpers.sendDeleteRequests(endpoint, headers, body);
    },

    DeleteALLBook(headers,userId){
        let endpoint = Cypress.env("apiUrl")+ BOOKSTORE_ENDPOINT.ENDPOINT_BOOKS_DELETE(userId);
        RequestHelpers.sendDeleteRequests(endpoint, headers);
    },  

    AddBook(headers, userId, isbn) {
        let endpoint = BOOKSTORE_ENDPOINT.ENDPOINT_BOOK_ADD;
        let body =
        {
            "userId": userId,
            "collectionOfIsbns": 
            [
                {
                "isbn": isbn
                }
            ]
        }
        RequestHelpers.sendPostRequests(endpoint, headers, body);
    },
}