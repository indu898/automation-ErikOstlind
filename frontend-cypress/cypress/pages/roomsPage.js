/// <reference types="cypress"/>
//elements
const createRoomBtn = 'h2 > .btn'
const logOutBtn = '.user > .btn'
const backBtn = ':nth-child(3) > .btn'
const lastRoomMenuBtn = ':last-child > .action > img'
const lastRoomRemoveBtn = '.menu > :nth-child(2)'
const lastRoomCategory = ':last-child > :nth-child(2) > .category'
const thirdRoom = '.rooms > :nth-child(3)'
const lastRoomAvailability = ':last-child > :nth-child(2) > .category'
const lastRoomPrice = ':last-child > :nth-child(2) > .price'
const lastRoomFirstFeature = ':last-child > :nth-child(2) > .features > :nth-child(1)'
const lastRoomSecondFeature = ':last-child > :nth-child(2) > .features > :nth-child(1)'
//functions
function pressBackBtn(cy){
cy.get(backBtn).click()
}
function logOut(cy){
    cy.get(logOutBtn).click()
}
function navigateToCreateRoom(cy){
    cy.get(createRoomBtn).click()
}
function removeLastRoom(cy,){
cy.get(thirdRoom).should('exist')
cy.get(lastRoomMenuBtn).click()
cy.get(lastRoomRemoveBtn).click()
cy.get(thirdRoom).should('not.exist')
}
//export
module.exports = {
    pressBackBtn,
    logOut,
    navigateToCreateRoom,
    removeLastRoom
}