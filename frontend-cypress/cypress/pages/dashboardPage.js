/// <reference types="cypress"/>

const logoutBtn = '.user > .btn'
const rooms = ':nth-child(1) > .btn'
const clients = '.blocks > :nth-child(2) > .btn'
const bills = ':nth-child(3) > .btn'
const reservations = ':nth-child(4) > .btn'

function logOut(cy){
    cy.get(logoutBtn).click()
}
function navigateToRooms(cy){
    cy.get(rooms).click()
}
function navigateToClients(cy){
    cy.get(clients).click()
}
function navigateToBills(cy){
cy.get(bills).click()
}
function navigateToReservations(cy){
    cy.get(reservations)
}
module.exports = {
    logOut,navigateToBills,navigateToClients,navigateToReservations,navigateToRooms
}
