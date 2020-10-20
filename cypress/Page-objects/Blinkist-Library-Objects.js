/// <reference types="cypress" />

class BlinkistLibrary{

    // Page objects used for finding elements
    discovery() {
        return cy.xpath('//a[contains(@href, "/en/nc/books")]')
    }

    category() {
        return cy.xpath('//a[contains(@href, "/en/nc/categories/entrepreneurship-and-small-business-en")]')
    }

    book() {
        return cy.xpath('//a[contains(@href, "/en/nc/reader/fix-this-next-en")]')
    }

    addToLibrary() {
        return cy.get('.js-add-to-library-button')
    }

}

export default BlinkistLibrary