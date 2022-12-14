import{Given,Then,And,When} from "cypress-cucumber-preprocessor/steps"
import { CreateStudent } from "../../../page0bjects/create-student-page";
import { NavigationPage } from "../../../page0bjects/navigation-page";

Given ("I am Create Student" , ()=>{
    CreateStudent.navigate()
})
When("User input into fields",(dataTable)=>{
    let element = dataTable.hashes()
    console.log(element)
    if(element[0].firstname){
        CreateStudent.inputFristname(element[0].firstname)
    }
    if(element[0].lastname){
        CreateStudent.inputLastname(element[0].lastname)
    }
    if(element[0].useremail){
        let useremail= element[0].useremail+(Math.floor(Date.now())+"@gmail.com")
        CreateStudent.inputUseremail(useremail)
    }
    if(element[0].phonenumber){
        CreateStudent.inputNumberPhone(element[0].phonenumber)
    }
    if(element[0].gender){
        CreateStudent.inputGender(element[0].gender)
    }
    if(element[0].day && element[0].month){
        CreateStudent.selectDateOfBirth(element[0].day, element[0].month)
    }
    if(element[0].address){
        CreateStudent.inputCurrentAddress(element[0].address)
    }
    if(element[0].subject){
        CreateStudent.inputSubject(element[0].subject)
    }
    if(element[0].hobbies){
        CreateStudent.inputHobbies(element[0].hobbies)
    }
    if(element[0].state){
        CreateStudent.selectState(element[0].state)
    }
    if(element[0].city){
        CreateStudent.selectCity(element[0].city)
    }
    if(element){
        CreateStudent.selectFileImage()
    }
    cy.wrap(element).as("respone")
})

And("I click on Submit button" , ()=>{
    CreateStudent.ClickSubmitButton();
})
Then("assert project is shown", () => {
    cy.get("@respone").then((res)=>{
        console.log(res)
        NavigationPage.assertGender().should('have.text',res[0].gender)
        NavigationPage.assertNameStudent().should("have.text",(res[0].firstname+" "+res[0].lastname))
        NavigationPage.assertEmail().contains(res[0].useremail)
        NavigationPage.assertMobile().should('have.text',res[0].phonenumber)
        NavigationPage.assertCurrentAddress().should('have.text',res[0].address)
        NavigationPage.assertSubject().should("have.text",res[0].subject)
        NavigationPage.assertHobbies().should("have.text",res[0].hobbies)
        NavigationPage.assertStateCity().should("have.text",(res[0].state+" "+res[0].city))
    })
    
})
