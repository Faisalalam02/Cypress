/// <reference types="cypress" />

class BlinkistAudio{

    // Page objects used for finding elements
    readNow () {
        return cy.xpath('//a[contains(text(),"Read now")]')
    }

    validateAudionSection () {
        return cy.xpath('//div[@class="reader__container_bottom_bar"]/div/div[2]')
        .should('have.css','reader-audio')
    }

    validateBookTitle (expectedTitle) {
        return cy.get('.reader-chapter-indicator__title')
        .should('have.text', expectedTitle)
    }

    validateCurrentChptrNum (expectedCurNum) {
        return cy.get('.reader-chapter-indicator__current')
        .should('have.text', expectedCurNum)
    }

    validateTotalChptrNum (expectedTotalNum) {
        return cy.get('.reader-chapter-indicator__total')
        .should('have.text', expectedTotalNum)
    }

    validatePlayBtn () {
        return cy.xpath('//div[@class="reader-audio__player reader-audio-player"]/div[1]/div')
        .should('have.css','reader-audio-player__play')
    }

    validatePauseBtn () {
        return cy.get('.reader-audio-player__play')
        .should('have.css', "reader-audio-player__play reader-audio-player__pause", {timeout: 3000})
    }

    validateRemaningTime (expectedTimeLeft) {
        return cy.xpath('//div[@class="reader-audio__player reader-audio-player"]/div[2]/div')
        .should('have.css','reader-audio-player__remaining-time')
        .should('have.text', expectedTimeLeft)
    }

    validateAudioBar () {
        return cy.xpath('//div[@class="reader-audio__player reader-audio-player"]/div[3]')
        .should('have.css','ranger__path')
    }

    validateAudioThumb () {
        return cy.xpath('//div[@class="ranger__path"]/div[2]')
        .should('have.css','ranger__thumb')
    }

    validateAudioTotalTime (expectedTotalTime) {
        return cy.xpath('//div[@class="reader-audio__player reader-audio-player"]/div[4]/div')
        .should('have.css','reader-audio-player__total-time')
        .should('have.text', expectedTotalTime)
    }

    validateAudioSoundBtn () {
        return cy.xpath('//div[@class="reader-audio__player reader-audio-player"]/div[5]/div')
        .should('have.css','reader-audio-player__sound')
    }

    validateVolumeBar () {
        return cy.xpath('//div[@class="reader-audio__player reader-audio-player"]/div[6]/div/div')
        .should('have.css','ranger__path')
    }

    validateVolumeThumb () {
        return cy.xpath('//div[@class="reader-audio__player reader-audio-player"]/div[6]/div/div/div[2]')
        .should('have.css','ranger__thumb')
    }

}

export default BlinkistAudio