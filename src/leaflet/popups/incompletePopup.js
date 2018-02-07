/* eslint-disable */
import { updateChallenge, checkAnswer, fetchChallenges, fetchCompletedChallenges } from '../../api/index';
import { handlePopupClose, handlePopupOpen, disableMap, enableMap } from './utils'

const incompleteOptions = {
    maxWidth: '400',
    width: '450',
    className: 'code-popup-top',
  };

export async function showIncompletePopup() {

    // const marker = L.marker([-668, 1308]).addTo(window.map);
    let headerElement = document.getElementsByClassName('leaflet-top leaflet-left')[0]
    const tabElement = document.getElementsByClassName('leaflet-top leaflet-right')[0];
    const logoElement = document.getElementsByClassName('leaflet-bottom leaflet-left')[0];
   
   
    tabElement.className = 'leaflet-top leaflet-right hide-tab'
    headerElement.className = "leaflet-top leaflet-left hide-header"
    logoElement.className = "leaflet-bottom leaflet-left"
   
   
    const markup = document.createElement('div');
    markup.className = 'code-popup-incomplete';
   
     markup.insertAdjacentHTML('afterbegin', `
     <div class="code-popup__container">
         <div class="code-popup__wrapper code-popup--1">
           <div class="code-popup__text code-popup__text--1"></div>
   
         </div>
   
         <div class="code-popup__wrapper code-popup--2">
           <div class="code-popup__text code-popup__text--2"></div>
         </div>
   
         <div class="code-popup__wrapper code-popup--3">
           <div class="code-popup__text code-popup__text--3"> </div>
         </div>
   
         <div class="code-popup__wrapper code-popup--4">
           <div class="code-popup__text code-popup__text--4"></div>
         </div>
   
         <div class="code-popup__wrapper code-popup--5">
           <div class="code-popup__text code-popup__text--5"></div>
         </div>
       </div>
     ` )  
   
     markup.insertAdjacentHTML('afterbegin', `
     <div class="code-popup__message">Find all five landmarks to complete the code and find the tomb.
   
       </div>
     ` ) 
   
     markup.insertAdjacentHTML('afterbegin', `
     <div class="code-popup__header">
         <span class="code-popup__header--text">Keep going</span>
         
       </div>
     ` )  
   
   
     markup.insertAdjacentHTML('afterbegin', `
     <img class="code-popup__image"></img>
     ` )  
   
   
     const challengespProgress = await fetchCompletedChallenges();
   
     for (let i = 0; i < challengespProgress.length; i++) {
   
       if (challengespProgress[i] == 'challenge1') {
         markup.querySelector('.code-popup__text.code-popup__text--1').innerHTML = 'Neither stone nor'
   
       } else if (challengespProgress[i] == 'challenge2') {
         markup.querySelector('.code-popup__text.code-popup__text--2').innerHTML = 'sun shall stop'
         
       } else if (challengespProgress[i] == 'challenge3') {
         markup.querySelector('.code-popup__text.code-popup__text--3').innerHTML = 'the lion entering'
         
       } else if (challengespProgress[i] == 'challenge4') {
         markup.querySelector('.code-popup__text.code-popup__text--4').innerHTML = 'the city of'
         
       } else if (challengespProgress[i] == 'challenge5') {
         markup.querySelector('.code-popup__text.code-popup__text--5').innerHTML = 'endless ruin'  
       }
     }
   
   
     var currentViewCenter = window.map.getCenter();
     var marker = L.marker(currentViewCenter).addTo(window.map);
   
   
     setTimeout(function() {
       let popup = marker.bindPopup(markup,  incompleteOptions)
   
       popup.on("popupclose", handlePopupClose);
       popup.on("popupopen", ()=> { handlePopupOpen() })
       popup.openPopup();
     }, 750);
     
   }
   