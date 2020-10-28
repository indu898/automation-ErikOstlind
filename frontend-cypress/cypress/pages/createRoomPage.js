/// <reference types="cypress" />
const header = '.router-link-active'
const categoryField = ':nth-child(1) > select'
const numberField = ':nth-child(2) > input'
const floorField = ':nth-child(3) > input'
const availableToggle = '.checkbox'
const priceField  = ':nth-child(5) > input'
const selectField = ':nth-child(6) > select'
const saveBtn = '.blue'
const lastRoomCategory = ':last-child > :nth-child(2) > .category'
const lastRoomAvailability = ':last-child > :nth-child(2) > .category'
const lastRoomPrice = ':last-child > :nth-child(2) > .price'
const lastRoomFirstFeature = ':last-child > :nth-child(2) > .features > :nth-child(1)'
const lastRoomSecondFeature = ':last-child > :nth-child(2) > .features > :nth-child(1)'

function createNewRoom(cy, number, floor, price){
    cy.get(categoryField).select('Double')
    cy.get(numberField).type(number)
    cy.get(floorField).type(floor)
    cy.get(availableToggle).click()
    cy.get(priceField).type(price)
    cy.get(selectField).select(['Sea View','Balcony'])
    cy.get(saveBtn).click()
    cy.get('.rooms > :last-child').should('contain','Available: true')
    .and('contain','Price: 2000kr')
    .and('contain','Category: double')
    .and('contain', 'sea view')
    .and('contain','balcony')
}
module.exports = {createNewRoom}