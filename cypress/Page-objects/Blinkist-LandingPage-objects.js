/// <reference types="cypress" />

class BlinkistLandingPage{
    
    navigate() {
        return cy.visit('https://www.blinkist.com/en/nc/books/')
    }
    
    cookieBtn() {
       return cy.get('.cookie-disclaimer__cta > .button')
    }
    
    login() {
        return cy.get('.header-content__link > span')
    }
    
    email(email) {
        return cy.get('#login-popup_login_email').type(email + "{enter}")
    }
    
    password(password) {
        return cy.get('#login-popup_login_password').type(password + "{enter}")
    }
    
    submit() {
        return cy.get('.auth-form__submit')
    }

}
export default BlinkistLandingPage