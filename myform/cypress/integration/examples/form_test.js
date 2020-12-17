describe('Quotes App', ()=>{
    //schedule something before each test
    beforeEach(()=>{
        cy.visit('http://localhost:3000')
    })

    const nameInput= () => cy.get('input[name=name]') 
    const emailInput= () => cy.get('input[name=email]')
    const passwordInput= () => cy.get('input[name=password]')
    const terms = () => cy.get('input[name=termsOfCondition')
    const submitBtn = () => cy.get('button')
    const error = () => cy.get('div[class=error]')

    describe('Writing and check each input', () =>{
        it('typing name input', ()=>{
            nameInput()
                .should('have.value','')
                .type('i m typing something')
                .should('not.have.value','')
        })
        it('typing email input ', ()=>{
            emailInput()
                .should('have.value','')
                .type('something@something.something')
                .should('not.have.value','')
        })
        it('typing password input ', ()=>{
            passwordInput()
             .should('have.value','')
                .type('something')
                .should('not.have.value','')
        })
        it('checking terms checkboxe ', ()=>{
            terms()
                .should('not.be.checked')
                .check()
                .should('be.checked')
                .uncheck()
        })
    })
    describe('Can Submit data?', ()=>{
        
        it('submit data',()=>{
            nameInput().type('something')
            emailInput().type('something@something.something')
            passwordInput().type('something')
            terms().check()
            submitBtn().should('not.be.disabled')
            submitBtn().click()
        })

    })
    describe('check validation', ()=>{
       
        it('validation form name input', ()=>{
            nameInput()
                .should('have.value','')
                .type('i m typing something')
                .clear()
            error().contains(/Name is required/).should('exist')

        })
        it('validation form email input ', ()=>{
            emailInput()
                .should('have.value','')
                .type('something@something.something')
                .clear()
            error().contains(/Must include email address/).should('exist')
        })
        it('validation form password input ', ()=>{
            passwordInput()
             .should('have.value','')
                .type('something')
                .clear()
            error().contains(/Paswword is required/).should('exist')
        })
        it('validation form terms checkboxe ', ()=>{
            terms()
                .should('not.be.checked')
                .check()
                .should('be.checked')
                .uncheck()
            error().contains(/You must Sign condition terms/).should('exist')
        })
        
    })
    
})