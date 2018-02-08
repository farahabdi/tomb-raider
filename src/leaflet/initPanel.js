/* eslint-disable */
import { updateChallenge, checkAnswer, fetchChallenges, fetchCompletedChallenges } from '../api/index';
import { showIncompletePopup, showFailPopup, showCompletedPopup, showSuccessPopup, showDuplicatePopup } from './popups'
import { showPopup, handlePopupOpen, handlePopupClose, disableMap, handleIconClick } from './popups'
import { polaroid, displayPolaroid, coordinates} from './utils'
import { crossIcon } from './utils/crossIcon';


export default async function initSearch() {
  const searchElement = document.getElementsByClassName('search__icon');
  const searchInput = document.getElementsByClassName('search__input');

  for (let i = 0; i < searchElement.length; i++) {
    searchElement[i].addEventListener('click', handleSearch);
    searchInput[i].addEventListener('keyup', (event) => {
      event.preventDefault(); 
      // console.log(event.key);
      if ((event.keyCode === 13) || (event.key==='Enter')) {
        handleSearch();
      }
    });
  }


  let challengeElement = document.getElementsByClassName('challenge__wrapper')[0]
  challengeElement.addEventListener('click', handleIconClick, false)



  function showLoader(){
    let loaderContainer = document.getElementById('animation_container');
    loaderContainer.style.display = 'inherit'
  }
  
  function hideLoader(){
    let loaderContainer = document.getElementById('animation_container');
    loaderContainer.style.display = 'none'
  }
  

  async function handleSearch() {
    const answerInput = searchInput[0].value.trim();
    searchInput[0].blur();
    showLoader();
    const challenges = await fetchChallenges();
    const answerKey = await checkAnswer(answerInput);


    hideLoader();


    const correctPopupOptions = {
      closeOnClick: false,
      maxWidth: '400',
      width: '450',
      className: 'popup__success',
    };


    if (challenges[answerKey]) {
      
      var currentViewCenter = window.map.getCenter();
      var marker = L.marker(currentViewCenter).addTo(window.map);

      const markup = await showDuplicatePopup()

      setTimeout(function() {
        let popup = marker.bindPopup(markup, correctPopupOptions)
        popup.on("popupclose", (marker) => { handlePopupClose(event, marker)});
        popup.on("popupopen", ()=> { handlePopupOpen() })
        popup.openPopup();
        }, 750);

      return
    }

    if (answerKey === 'challenge1') {
      /* Stonehenge - UK */

      /* Update challenge */
      updateChallenge('challenge1');

      /* Cross icon */
      crossIcon(answerKey)

      /* Show Polaroid */
      displayPolaroid(answerKey)

      /* Fly to Point */
      window.map.flyTo(coordinates[answerKey], 1);

      /* Show popop */
      
      showPopup(answerKey)
     
    } else if (answerKey === 'challenge2') {
     /* Gedi Ruins -- Kenya */

      /* Update challenge */
      updateChallenge('challenge2');

      /* Cross icon */
      crossIcon(answerKey)

      /* Show Polaroid */
      displayPolaroid(answerKey)


      /* Fly to location */
      window.map.flyTo(coordinates[answerKey], 1);

      /* Show popop */
      showPopup(answerKey)



    } else if (answerKey === 'challenge3') {
      /* Forbidden City -- China */

      /* Update challenge */
      updateChallenge('challenge3');

      /* Cross icon */
      crossIcon(answerKey)

      /* Fly to Point */
      window.map.flyTo(coordinates[answerKey], 1);

      /* Show Polaroid -- */
      displayPolaroid(answerKey)

      /* Show popop */
      showPopup(answerKey)

    } else if (answerKey === 'challenge4') {
    /* Pyramid of the Suns -- Mexico */

      /* Update challenge */
      updateChallenge('challenge4');

      /* Cross icon */
      crossIcon(answerKey)

      /* Fly to Point */
      window.map.flyTo(coordinates[answerKey], 1);

      /* Show Polaroid */
      displayPolaroid(answerKey)

      /* Show popop */
      showPopup(answerKey)
      

    } else if (answerKey === 'challenge5') {
      /* Sigiriya */

      /* Update challenge */
      updateChallenge('challenge5');

      /* Cross icon */
      crossIcon(answerKey)

      /* Fly to Point */
      window.map.flyTo(coordinates[answerKey], 1);

      /* Show Polaroid */
      displayPolaroid(answerKey)

      /* Show popop */
      showPopup(answerKey)

      
    } else {

      /* Show popop */
      window.map.flyTo([-281.0806053100124, 2210.8239225493235], 1);


      const markup = await showFailPopup();


      setTimeout(function() {
        var currentViewCenter = window.map.getCenter();
        var marker = L.marker(currentViewCenter).addTo(window.map);
        let popup = marker.bindPopup(markup, correctPopupOptions)
          
        popup.on("popupclose", handlePopupClose);
        popup.on("popupopen", ()=> { handlePopupOpen() })
        popup.openPopup();
      }, 2200);

      /* Fly to Point */
  

    }
  }
}


