/* eslint-disable */

import { fetchChallenges } from '../api/index'

import code1 from '../assets/code1_complete.png'
import code2 from '../assets/code2_complete.png'
import code3 from '../assets/code3_complete.png'
import code4 from '../assets/code4_complete.png'
import code5 from '../assets/code5_complete.png'


export async function initChallenges() {
    let searchInput = document.getElementsByClassName('search__input')
    let challenges = await fetchChallenges()

    if (challenges.challenge1 == true) {
        document.getElementsByClassName('challenge__1')[0].src = code1
    } 
    
    if (challenges.challenge2 == true) {
        document.getElementsByClassName('challenge__2')[0].src = code2
     //   window.map.flyTo([13.87992, 45.9791], 1)
        debugger

        
    }
    
    if (challenges.challenge3 == true) {
        document.getElementsByClassName('challenge__3')[0].src = code3
    }
    if (challenges.challenge4 == true) {
        document.getElementsByClassName('challenge__4')[0].src = code4
    }
    
    if (challenges.challenge5 == true) {
        document.getElementsByClassName('challenge__5')[0].src = code5
    }
  }

