/// <reference types="cypress"/>
import * as dashboardFuncs from '../pages/dashboardPage'
//elements
const indexPageTitle = 'Testers Hotel'
const usernameField = ':nth-child(1) > input'
const passwordField =  ':nth-child(2) > input'
const loginBtn = '.btn'

//functions
function checkTitleOfIndexPage(cy){
    cy.title().should('eq', indexPageTitle)
}

function performInvalidLogin(cy, invalidUsername, invalidPassword,contentsToConfirm){
    cy.get(usernameField).type(invalidUsername)
    cy.get(passwordField).type(invalidPassword)
    cy.get(loginBtn).click()
    cy.contains(contentsToConfirm)
}

function performValidLogin(cy,username,password ,contentsToConfirm){
cy.get(usernameField).type(username)
cy.get(passwordField).type(password)
cy.get(loginBtn).click()
cy.contains(contentsToConfirm)
}

function nagigateToIndex(){

}

module.exports = {
performInvalidLogin,
checkTitleOfIndexPage,
performValidLogin
}