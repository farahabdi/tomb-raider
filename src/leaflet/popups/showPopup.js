/* eslint-disable */
import { updateChallenge, checkAnswer, fetchChallenges, fetchCompletedChallenges, isFinalChallenge} from '../../api/index';
import { coordinates } from '../utils'

import { showCompletedPopup, showIncompletePopup, showSuccessPopup } from './index'

import { handlePopupClose, handlePopupOpen } from './utils'

const doneOptions = {
    maxWidth: '400',
    width: '450',
    className: 'code-popup-top',
  };
  
const correctPopupOptions = {
    closeOnClick: false,
    maxWidth: '400',
    width: '450',
    className: 'popup__correct',
};
  

export async function showPopup(challenge) {

    let markup = null


    let marker = L.marker(coordinates[challenge]).addTo(window.map);

    const completedChallenge = isFinalChallenge()

    if (!completedChallenge) {
        markup = await showCompletedPopup()

        setTimeout(() => {
            let popup = marker.bindPopup(markup, doneOptions)
            popup.on("popupclose", handlePopupClose);
            popup.on("popupopen", handlePopupOpen)
            popup.openPopup();
        }, 750);
      
    } else {
        markup = await showSuccessPopup()

        setTimeout(() => {
            let popup = marker.bindPopup(markup, correctPopupOptions)
            popup.on("popupclose", handlePopupClose);
            popup.on("popupopen", handlePopupOpen)
            popup.openPopup();
    
            const element = document.getElementsByClassName('popup_correct button')[0];
            element.addEventListener('click', showIncompletePopup, false);
  
        }, 750);
      
    }

}

