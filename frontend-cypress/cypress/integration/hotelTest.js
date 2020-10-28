/// <reference types="cypress" />

//Test suite

/*it('Test - Invalid login', function(){
    cy.visit('http://localhost:3000/login')
    cy.get(':nth-child(1) > input').type('tester')
    cy.get(':nth-child(2) > input').type('db7xuf8c')
    cy.get('.btn').click()
    //cy.contains('Bad username or password')
    }
    )
it('Test - valid login', function(){
    cy.visit('http://localhost:3000/login')
    cy.get(':nth-child(1) > input').type('tester01')
    cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
    cy.get('.btn').click()
    cy.contains('Welcome tester01!')
    cy.get('.user > .btn').click()
}

it('Test - Create customer', function(){
    cy.visit('http://localhost:3000/login')
    cy.get(':nth-child(1) > input').type('tester01')
    cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
    cy.get('.btn').click()
    cy.get('.blocks > :nth-child(2) > .btn').click()
    cy.get('h2 > .btn').should('contain', 'Create Client').click()
    cy.get('h2 > div').should('contain', 'New Client')
    cy.get(':nth-child(1) > input').type('Erik Erikson')
    cy.get(':nth-child(2) > input').type('erik@erikson.com')
    cy.get(':nth-child(3) > input').type('08258250')
    cy.get('.blue').click()
    cy.get('.clients > :last-child').should('contain','Erik Erikson').and('contain','Email: erik@erikson.com').and('contain','Telephone: 08258250')
    cy.get(':nth-child(3) > .action > img').click()
    cy.get('.menu > :nth-child(2)').click()
}
)*//*
it('Test - Delete customer', function(){
    cy.visit('http://localhost:3000/login')
    cy.get(':nth-child(1) > input').type('tester01')
    cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
    cy.get('.btn').click()
    cy.get('.blocks > :nth-child(2) > .btn').click()
    cy.get('h2 > .btn').should('contain', 'Create Client').click()
    cy.get(':nth-child(1) > input').type('Erik Erikson')
    cy.get(':nth-child(2) > input').type('erik@erikson.com')
    cy.get(':nth-child(3) > input').type('08258250')
    cy.get('.blue').click()
    cy.get(':nth-child(3) > .action > img').click()
    cy.get('.menu > :nth-child(2)').click()
    cy.get('.clients > :last-child').should('not.contain','Erik Erikson').and('not.contain','Email: erik@erikson.com').and('not.contain','Telephone: 08258250')
    cy.get('.user > .btn')
}
)*/
it('Test - Create Room', function(){
    cy.visit('http://localhost:3000/login')
    cy.get(':nth-child(1) > input').type('tester01')
    cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
    cy.get('.btn').click()
    cy.get('.blocks > :nth-child(1) > .btn').click()
    cy.get('h2 > .btn').should('contain', 'Create Room').click()
    cy.get('h2 > div').should('contain', 'New Room')
    cy.get(':nth-child(1) > select').select('Double')
    cy.get(':nth-child(2) > input').type('2')
    cy.get(':nth-child(3) > input').type('2')
    cy.get('.checkbox').click()
    cy.get(':nth-child(5) > input').type('2000')
    cy.get(':nth-child(6) > select').select(['Sea View','Balcony'])
    cy.get('.blue').click()
    cy.get(':last-child > :nth-child(2) > h3').should('contain','Floor 2, Room 2')
    cy.get(':last-child > :nth-child(2) > .category').should('contain','Category: double')
    cy.get(':last-child > :nth-child(2) > .available').should('contain','Available: true')
    cy.get(':last-child > :nth-child(2) > .price').should('contain','Price: 2000kr')
    cy.get(':last-child > :nth-child(2) > .features > :nth-child(1)').should('contain','balcony')
    cy.get(':last-child > :nth-child(2) > .features > :nth-child(2)').should('contain','sea view')
    cy.get(':last-child > .action > img').click()
    cy.get('.menu > :nth-child(2)').click()
    cy.get('.user > .btn').click()
    
}
)
it('Test - Delete Room', function(){
    cy.visit('http://localhost:3000/login')
    cy.get(':nth-child(1) > input').type('tester01')
    cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
    cy.get('.btn').click()
    cy.get('.blocks > :nth-child(1) > .btn').click()
    cy.get('h2 > .btn').click()
    cy.get(':nth-child(1) > select').select('Double')
    cy.get(':nth-child(2) > input').type('2')
    cy.get(':nth-child(3) > input').type('2')
    cy.get('.checkbox').click()
    cy.get(':nth-child(5) > input').type('2000')
    cy.get(':nth-child(6) > select').select(['Sea View','Balcony'])
    cy.get('.blue').click()
    cy.get(':last-child > .action > img').click()
    cy.get('.menu > :nth-child(2)').click()
    cy.get('.rooms > :nth-child(3)').should('not.exist')
    cy.get('.user > .btn').click()
}
)

