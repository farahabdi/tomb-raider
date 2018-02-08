/* eslint-disable */
import { updateChallenge, checkAnswer, fetchChallenges, fetchCompletedChallenges, isFinalChallenge} from '../../api/index';
import { coordinates } from '../utils'

import { showCompletedPopup, showIncompletePopup, showSuccessPopup } from './index'

import { handlePopupClose, handlePopupOpen } from './utils'

const doneOptions = {
    maxWidth: '400',
    width: '450',
    className: 'code-popup-done',
  };
  
const correctPopupOptions = {
    closeOnClick: false,
    maxWidth: '400',
    width: '450',
    className: 'popup__success',
};
  

export async function showPopup(challenge) {

    let markup = null

    let marker = L.marker(coordinates[challenge]).addTo(window.map);

    const completedChallenges = await fetchCompletedChallenges()
    const finalChallengeCompletesd = completedChallenges.length === 5
    debugger

    if (finalChallengeCompletesd) {
        markup = await showCompletedPopup(completedChallenges)

        setTimeout(() => {
            let popup = marker.bindPopup(markup, doneOptions)
            popup.on("popupclose", handlePopupClose);
            popup.on("popupopen", handlePopupOpen)
            popup.openPopup();
        }, 750);
      
    } else {
        markup = await showSuccessPopup(completedChallenges)

        setTimeout(() => {
            let popup = marker.bindPopup(markup, correctPopupOptions)
            popup.on("popupclose", handlePopupClose);
            popup.on("popupopen", handlePopupOpen)
            popup.openPopup();
    
            const element = document.getElementsByClassName('popup_success button')[0];
            element.addEventListener('click', showIncompletePopup, false);
  
        }, 750);
      
    }

}




export async function handleIconClick() {

    let markup = null

    var currentViewCenter = window.map.getCenter();
    var marker = L.marker(currentViewCenter).addTo(window.map);

    const completedChallenges = await fetchCompletedChallenges()
    const finalChallengeCompletesd = completedChallenges.length === 5
    debugger

    if (finalChallengeCompletesd) {
        markup = await showCompletedPopup(completedChallenges)

        setTimeout(() => {
            let popup = marker.bindPopup(markup, doneOptions)
            popup.on("popupclose", handlePopupClose);
            popup.on("popupopen", handlePopupOpen)
            popup.openPopup();
        }, 750);
      
    } else {
        markup = await showSuccessPopup(completedChallenges)

        setTimeout(() => {
            let popup = marker.bindPopup(markup, correctPopupOptions)
            popup.on("popupclose", handlePopupClose);
            popup.on("popupopen", handlePopupOpen)
            popup.openPopup();
    
            const element = document.getElementsByClassName('popup_success button')[0];
            element.addEventListener('click', showIncompletePopup, false);
  
        }, 750);
      
    }

}

