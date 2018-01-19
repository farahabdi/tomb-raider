
/* eslint-disable */
import { firebaseAuth } from '../utils/config'
import { db } from '../utils/config';
import { updateChallenge, checkAnswer, fetchChallenges } from '../api/index'
import initApp from './initMap'

let init = initApp

let x = initApp().map

export default function initSearch() {

    let searchElement = document.getElementsByClassName('search__icon')
    let searchInput = document.getElementsByClassName('search__input')

    for (let i = 0; i < searchElement.length; i++) {
        searchElement[i].addEventListener("click", handleSearch);
        searchInput[i].addEventListener('keyup', event => {
            debugger
            event.preventDefault();
            if (event.keyCode === 13) {
                handleSearch()
            }
        })   
    }
    
    document.getElementsByClassName('challenge__1')[0].src = 'https://i.imgur.com/Q24mwMo.png'
    document.getElementsByClassName('challenge__2')[0].src = 'https://i.imgur.com/FQfXCwv.png'
    document.getElementsByClassName('challenge__3')[0].src = 'https://i.imgur.com/PPjvBQl.png'
    document.getElementsByClassName('challenge__4')[0].src = 'https://i.imgur.com/sFfZ8DU.png'
    document.getElementsByClassName('challenge__5')[0].src = 'https://i.imgur.com/sFfZ8DU.png'
    

    
    async function handleSearch() {
        let searchInput = document.getElementsByClassName('search__input')
        let answerInput = searchInput[0].value
        searchInput[0].blur()
        let answerKey = await checkAnswer(answerInput)
        const user = firebaseAuth.currentUser;

        if (answerKey === 'challenge1') {
            document.getElementsByClassName('challenge__1')[0].src = 'https://i.imgur.com/Tnzujx4.png'
  
            // -465, 1174
            window.map.flyTo([-465, 1174], 1)    
            updateChallenge('challenge1')
        } else if (answerKey === 'challenge2') {
            document.getElementsByClassName('challenge__2')[0].src = 'https://i.imgur.com/vp5VXcp.png'

            // -668, 1308
            window.map.flyTo([-668, 1308], 1)
            updateChallenge('challenge2')
        } else if (answerKey === 'challenge3') {
            document.getElementsByClassName('challenge__3')[0].src = 'https://i.imgur.com/zikZBt3.png'
            // -474, 1683
            
            window.map.flyTo([-474, 1683], 1)
            updateChallenge('challenge3')
        } else if (answerKey === 'challenge4') {
            document.getElementsByClassName('challenge__4')[0].src = 'https://i.imgur.com/rdioy0g.png'
               // -585.7060241699219, 632.9839477539062
            window.map.flyTo([-585.7060241699219, 632.9839477539062], 1)
            updateChallenge('challenge4')
        } else if (answerKey === 'challenge5') {
            document.getElementsByClassName('challenge__5')[0].src = 'https://i.imgur.com/lvhAJKO.png'
            updateChallenge('challenge5')
        }
      }
  }

  

