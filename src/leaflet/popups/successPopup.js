/* eslint-disable */
import { updateChallenge, checkAnswer, fetchChallenges, fetchCompletedChallenges } from '../../api/index';
import { handlePopupClose, handlePopupOpen, disableMap, enableMap } from './utils'
import { text } from './data'

export async function showSuccessPopup(challenges) {

    let num = challenges.length
  debugger

    const tabElement = document.getElementsByClassName('tab__container')[0];
    tabElement.setAttribute("style", "display: none" )
  
    const mapElement = document.getElementsByClassName('leaflet-overlay-pane')[0].className= "leaflet-pane leaflet-overlay-pane hide-map"
  
    const popupElement = window.map._panes["popupPane"].className = "leaflet-pane leaflet-popup-pane unhide-map"
    

    /* Success popup */
    const markup = document.createElement('div');
    markup.className = 'popup__success';
    markup.insertAdjacentHTML('afterbegin', `<div class="content"> <div class="content__arrow">  </div><div class="popup_success button">  <span class="underline underline--bacon">View code</span></div>`);
    markup.insertAdjacentHTML('afterbegin', `<div class="message">${text[num].message}</div>`);
    markup.insertAdjacentHTML('afterbegin', `<div class="header">${text[num].heading}</div>`);
  
    return markup;
  }
  