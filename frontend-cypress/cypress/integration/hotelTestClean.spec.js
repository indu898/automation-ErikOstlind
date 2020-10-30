/// <reference types="cypress" />

import * as loginFuncs from '../pages/indexPage'
import * as dashboardFuncs from '../pages/dashboardPage'
import * as targets from '../targets/targets'
import * as clientFuncs from '../pages/clientPage'
import * as createClientFuncs from '../pages/createClientPage'
import * as roomFuncs from '../pages/roomsPage'
import * as createNewRoomfuncs from '../pages/createRoomPage'
import { navigateToRooms } from '../pages/dashboardPage'

describe('Regression test suite', function () {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('Test - Invalid login', function () {
        loginFuncs.performInvalidLogin(cy, targets.badUsername, targets.badUsername, targets.wrongCredentialsAlert)
    }
    )
    it('Test - valid login', function () {
        loginFuncs.performValidLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')
        dashboardFuncs.logOut(cy)
    }
    )
    it('Test - Create customer', function () {
        loginFuncs.performValidLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')
        dashboardFuncs.navigateToClients(cy, 'Clients')
        clientFuncs.navigateToCreateClientPage(cy, 'New Client')
        createClientFuncs.createNewClient(cy, targets.clientName, targets.clientEmail, targets.clientTelephone)
        clientFuncs.removeClient(cy)
        clientFuncs.logOut(cy)
    }
    )
    it('Test - Delete customer', function () {
        loginFuncs.performValidLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')
        dashboardFuncs.navigateToClients(cy, 'Clients')
        clientFuncs.navigateToCreateClientPage(cy, 'New Client')
        createClientFuncs.createNewClient(cy, targets.clientName, targets.clientEmail, targets.clientTelephone)
        clientFuncs.removeClient(cy)
        clientFuncs.checkClientIsRemoved(cy, targets.clientName, targets.clientEmail, targets.clientTelephone)
        clientFuncs.logOut(cy)
    }
    )
    it('Test - Create Room', function () {
        loginFuncs.performValidLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')
        dashboardFuncs.navigateToRooms(cy, 'Rooms')
        roomFuncs.navigateToCreateRoom(cy)
        createNewRoomfuncs.createNewRoom(cy, '2', '2', '2000')
        roomFuncs.logOut(cy)
    }
    )
    it('Test case - Delete Room', function () {
        loginFuncs.performValidLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')
        dashboardFuncs - navigateToRooms(cy, 'Rooms')
        roomFuncs.removeLastRoom(cy)
        roomFuncs.logOut(cy)

    })
})