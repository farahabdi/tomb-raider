/* eslint-disable */
import { updateChallenge, checkAnswer, fetchChallenges, fetchCompletedChallenges } from '../../api/index';
import { handlePopupClose, handlePopupOpen, disableMap, enableMap } from './utils'

export async function showDuplicatePopup() {
    /* Already completed popup */
    const markup = document.createElement('div');
    markup.className = 'popup__correct';
    markup.insertAdjacentHTML('afterbegin', `<div class="message">You’ve already uncovered that one. Check out my Field Notes for intel on the other landmarks.</div>`);
    markup.insertAdjacentHTML('afterbegin', `<div class="header">Good Job!</div>`);
  
    const tabElement = document.getElementsByClassName('tab__container')[0];
    tabElement.setAttribute("style", "display: none" )
  
   const mapElement = document.getElementsByClassName('leaflet-overlay-pane')[0].className= "leaflet-pane leaflet-overlay-pane hide-map"
  
   const popupElement = window.map._panes["popupPane"].className = "leaflet-pane leaflet-popup-pane unhide-map"
  
    return markup;
  }
  