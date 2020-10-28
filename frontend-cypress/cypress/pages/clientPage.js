/// <reference types="cypress"/>

import * as loginFuncs from'../pages/indexPage'
import * as dashboardFuncs from '../pages/dashboardPage'
import * as targets from '../targets/targets'
import * as clientFuncs from '../pages/clientPage'
import * as createClientFuncs from '../pages/createClientPage'

//elements
const logoutBtn ='.user > .btn'
const createClientBtn = 'h2 > .btn'
const clientsHeader = 'h2 > div'
const backBtn = ':nth-child(3) > .btn'
const lastClient = '.clients > :last-child'
const lastClientMenu = ':last-child > .action > img'
const lastClientRemoveBtn = '.menu > :nth-child(2)'
//functions

function navigateToCreateClientPage(cy){
    cy.get(createClientBtn).click()
}
function removeClient(cy){
    cy.get(lastClientMenu).click()
    cy.get(lastClientRemoveBtn).click()
}
function logOut(cy){
    cy.get(logoutBtn).click()
}
function checkClientIsAdded(cy, fullName, email, telephone){
    cy.get(lastClient).should('contain',fullName).and('contain',email).and('contain',telephone)
}
function checkClientIsRemoved(cy, fullName, email, telephone){
    cy.get(lastClient).should('not.contain',fullName).and('not.contain',email).and('not.contain',telephone)
}
module.exports = {
    navigateToCreateClientPage, removeClient, logOut, checkClientIsAdded, checkClientIsRemoved
}