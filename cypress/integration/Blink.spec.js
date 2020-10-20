/// <reference types = "cypress"/>

import 'cypress-xpath'
import BlinkistAudio from "../Page-objects/Blinkist-Audio-objects"
import BlinkistLandingPage from "../Page-objects/Blinkist-LandingPage-objects"
import BlinkistLibrary from "../Page-objects/Blinkist-Library-Objects"



const blink = new BlinkistLandingPage
const library = new BlinkistLibrary
const audio = new BlinkistAudio

describe('Accessing and login on Blinkist website', () => {
    
    
        it('Navigate to Blinkist website', () => {

            blink.navigate()
            blink.cookieBtn().click()
            
        })

        it('Login to the website', () => {
            
            blink.login().click()
            blink.email("m.faisalalam12@gmail.com")
            blink.password("Admin1234")
            blink.submit().click()
        })
    })

describe('Locating a book and adding it to the library', () => {

        it('Add any book to library', () => {
            library.discovery().click()

            library.category().click()

            library.book().click()

            library.addToLibrary().click()

        })
    })

describe('Verification of multiple audio features ', () => {
    

        it('Audio features verificaation', () => {
            audio.readNow().click()

            audio.validateAudionSection()

            audio.validateBookTitle('Fix This Next')

            audio.validateCurrentChptrNum('1')

            audio.validateTotalChptrNum('10')

            audio.validatePlayBtn()

            audio.validateRemaningTime('0.00')

            audio.validateAudioBar()

            audio.validateAudioThumb()

            audio.validateAudioTotalTime('1:13')

            audio.validateAudioSoundBtn()

            audio.validateVolumeBar()

            audio.validateVolumeThumb()

        })

        it('Running the audio and validating impacts ', () => {
                audio.validatePlayBtn().click()

                audio.validatePauseBtn().click()

                audio.validateRemaningTime('0.3')

                audio.validateAudioTotalTime('1:13')


            })
    })