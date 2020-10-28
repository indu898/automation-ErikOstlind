/// <reference types="cypress" />

import * as loginFuncs from'../pages/indexPage'
import * as dashboardFuncs from '../pages/dashboardPage'
import * as targets from '../targets/targets'
import * as clientFuncs from '../pages/clientPage'
import * as createClientFuncs from '../pages/createClientPage'
import * as roomFuncs from '../pages/roomsPage'
import * as createNewRoomfuncs from '../pages/createRoomPage'
import { navigateToRooms } from '../pages/dashboardPage'

describe('Regression test suite', function(){
    beforeEach( ()=>{
        cy.visit('http://localhost:3000/')
    })

    it('Test - Invalid login', function(){
        loginFuncs.performInvalidLogin(cy,targets.badUsername,targets.badUsername,targets.wrongCredentialsAlert )
        }
        )
    it('Test - valid login', function(){
        loginFuncs.performValidLogin(cy,targets.username,targets.password,targets.dashboardContains)
        dashboardFuncs.logOut(cy)
        }
    )
    it('Test - Create customer', function(){
        loginFuncs.performValidLogin(cy,targets.username,targets.password,targets.dashboardContains)
        dashboardFuncs.navigateToClients(cy)
        clientFuncs.navigateToCreateClientPage(cy)
        createClientFuncs.createNewClient(cy,targets.clientName,targets.clientEmail, targets.clientTelephone)
        clientFuncs.removeClient(cy)
        clientFuncs.logOut(cy)
    }
    )
    it('Test - Delete customer', function(){
        loginFuncs.performValidLogin(cy,targets.username,targets.password,targets.dashboardContains)
        dashboardFuncs.navigateToClients(cy)
        clientFuncs.navigateToCreateClientPage(cy)
        createClientFuncs.createNewClient(cy, targets.clientName,targets.clientEmail,targets.clientTelephone)
        clientFuncs.removeClient(cy)
        clientFuncs.checkClientIsRemoved(cy,targets.clientName,targets.clientEmail,targets.clientTelephone)
        clientFuncs.logOut(cy)
    }
    )
    it('Test - Create Room', function(){
        loginFuncs.performValidLogin(cy, targets.username, targets.password, targets.dashboardContains)
        dashboardFuncs.navigateToRooms(cy)
        roomFuncs.navigateToCreateRoom(cy)
        createNewRoomfuncs.createNewRoom(cy,'2','2','2000')
    }
    )
    it('Test case - Delete Room', function(){
        loginFuncs.performValidLogin(cy,targets.username,targets.password,targets.dashboardContains)
        dashboardFuncs-navigateToRooms(cy)
        roomFuncs.removeLastRoom(cy)

    })
})