/* eslint-disable */
import { updateChallenge, checkAnswer, fetchChallenges, fetchCompletedChallenges } from '../../api/index';
import { handlePopupClose, handlePopupOpen, disableMap, enableMap } from './utils'

export async function showFailPopUp() {

    let count = 1
    if (!window.numTries) {
      window.numTries = count
    } else if (window.numTries >= 3) {
      count = 3
    } else {
      window.numTries= window.numTries + 1
      count = window.numTries
    }
  
    const tabElement = document.getElementsByClassName('tab__container')[0];
    tabElement.setAttribute("style", "display: none" )
  
   const mapElement = document.getElementsByClassName('leaflet-overlay-pane')[0].className= "leaflet-pane leaflet-overlay-pane hide-map"
  
   const popupElement = window.map._panes["popupPane"].className = "leaflet-pane leaflet-popup-pane unhide-map"
  
    /* Fail popup */
    const markup = document.createElement('div');
    markup.className = 'popup__correct';
    markup.insertAdjacentHTML('afterbegin', `<div class="message">${failText[count].message}</div>`);
    markup.insertAdjacentHTML('afterbegin', `<div class="header">${failText[count].heading}</div>`);
  
    let map = window.map
    disableMap();
    return markup;
  }