/// <reference types="cypress"/>
//elements

import * as loginFuncs from'../pages/indexPage'
import * as dashboardFuncs from '../pages/dashboardPage'
import * as targets from '../targets/targets'
import clientPage, * as clientFuncs from '../pages/clientPage'
import * as createClientFuncs from '../pages/createClientPage'

const clientNameField =  ':nth-child(1) > input'
const clientEmailField = ':nth-child(2) > input'
const clientTelephoneField = ':nth-child(3) > input'
const saveBtn = '.blue'
const lastClient = '.clients > :last-child'
const lastClientMenu = ':last-child > .action > img'
const lastClientRemoveBtn = '.menu > :nth-child(2)'
const logOutBtn = '.user > .btn'

//functions
function createNewClient(cy,fullName,email,telephone){
cy.get(clientNameField).type(fullName)
cy.get(clientEmailField).type(email)
cy.get(clientTelephoneField).type(telephone)
cy.get(saveBtn).click()
cy.get(lastClient).should('contain',fullName).and('contain',email).and('contain',telephone)
}

module.exports ={
    createNewClient
}