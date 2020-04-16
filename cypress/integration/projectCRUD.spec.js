import { EMAIL, PASSWORD } from '../const'

context("Projects CRUD", () => {

    // test login
    it('login', () => {
        cy.visit('http://localhost:3000')

        cy.get('.MuiBottomNavigation-root > [role="button"]')
            .click()

        cy.get('#email')
            .type(EMAIL)

        cy.get('#password')
            .type(PASSWORD)

        cy.get('#submit')
            .click()

        // check if the admin button apears on the 
        // header
        cy.get('#admin')
            .should('have.attr', 'href')
            .and('include', '/admin')
    })

    //create a project
    it('Create new project', () => {

        // type the title in the box
        cy.get('#createTitle')
            .type('Cypress Test Project')

        // type the text
        cy.get('#createText')
            .type('This is a projected created by cypress.')

        // type the Live Link
        cy.get('#createLiveLink')
            .type('https://sn-todo.herokuapp.com')

        // type the github links
        cy.get('#createGitHubLinks')
            .type('https://github.com/spencerNelson-dev,https://github.com/spencerNelson-dev')

        // select the image
        cy.get('#createImgSelect')
            .click()
        cy.contains('mountain-snow-view-vista-landscape-utah.jpg')
            .click()

        // click the create button
        cy.get('#createButton')
            .click()

        // Now we go to the portfolio page
        // and check to see if it is there
        cy.get('[href="/portfolio"]')
            .click()

        // check the text
        cy.contains('Cypress Test Project')
        cy.contains('This is a projected created by cypress.')
        // check the image
        //cy.get('#mountain-snow-view-vista-landscape-utah\.jpg')

        //TODO 
        // Make sure all of the links work
        // check the img

    })

    //edit project
    it('Edit project', () => {

        // go to the admin page
        cy.get('#admin')
            .click()

        // select the project
        cy.get('#editProjectSelect')
            .click()
        cy.get('#Cypress')
            .click()

        // edit tytpe
        cy.get('#editTitle')
            .type(' EDIT')

        // edit the text
        cy.get('#editText')
            .type(' EDIT')

        // edit the Live Link
        cy.get('#editLiveLink')
            .type('/EDIT')

        // edit the github links
        cy.get('#editGitHubLinks')
            .clear()
            .type('https://github.com/spencerNelson-dev')

        // select the image
        cy.get('#editImageSelect')
            .click()
        cy.contains('about.jpg')
            .click()

        //click the edit button
        cy.get('#editButton')
            .click()

        // Now we go to the portfolio page
        // and check to see if it is there
        cy.get('[href="/portfolio"]')
            .click()

        // check the text
        cy.contains('Cypress Test Project EDIT')
        cy.contains('This is a projected created by cypress. EDIT')


    })

    it('Delete project', () => {

        cy.get('#CypressDelete')
            .click()

        cy.wait(500)

        // check the text
        cy.get('.MuiGrid-item > .MuiGrid-root')
        cy.should('not.contain', 'Cypress Test Project')
        cy.should('not.contain', 'This is a projected created by cypress.')
    })
})