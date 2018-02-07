/* eslint-disable */
import { updateChallenge, checkAnswer, fetchChallenges, fetchCompletedChallenges } from '../../api/index';
import { handlePopupClose, handlePopupOpen, disableMap, enableMap } from './utils'
import { text } from './data'

export async function showSuccessPopup() {
    const challenges = await fetchChallenges();
  
    const tabElement = document.getElementsByClassName('tab__container')[0];
     tabElement.setAttribute("style", "display: none" )
  
    const mapElement = document.getElementsByClassName('leaflet-overlay-pane')[0].className= "leaflet-pane leaflet-overlay-pane hide-map"
  
    const popupElement = window.map._panes["popupPane"].className = "leaflet-pane leaflet-popup-pane unhide-map"
    
    let num = 0;
    
    //Object.values(challenges).forEach((value) => { if (value === true) { num += 1; } });
    //IE doesn't support Object.values so lets get them this way
    var values = Object.keys(challenges).map(e => challenges[e])
    values.forEach((value) => { if (value === true) { num += 1; } });
  
    num++;
    if (num>=5) {
      num = 5
    }
    /* Success popup */
    const markup = document.createElement('div');
    markup.className = 'popup__correct';
    markup.insertAdjacentHTML('afterbegin', `<div class="content"> <div class="content__arrow">  </div><div class="popup_correct button">  <span class="underline underline--bacon">View code</span></div>`);
    markup.insertAdjacentHTML('afterbegin', `<div class="message">${text[num].message}</div>`);
    markup.insertAdjacentHTML('afterbegin', `<div class="header">${text[num].heading}</div>`);
  
    return markup;
  }
  