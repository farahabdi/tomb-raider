/* eslint-disable */
import { updateChallenge, checkAnswer, fetchChallenges, fetchCompletedChallenges } from '../api/index';
import chinaIcon from '../assets/Polaroid_China.png';
import stonehengeIcon from '../assets/Polaroid_Stonehenge.png';
import kenyaIcon from '../assets/Polaroid_Kenya.png';
import mexicoIcon from '../assets/Polaroid_Mexico.png';
import niagaraIcon from '../assets/Polaroid_Niagara.png';
import markArrow from '../assets/markArrow.png';

const pathChallenge1 = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 139.26 133.91"><defs><style>.cls-1{fill:#8c0303;}</style></defs><title>Asset 1</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M95.36,32.16c-1-5.14-4.87-10.11-10.3-13.6a45,45,0,0,0-19-6.57,53.42,53.42,0,0,0-10.43-.22,52.44,52.44,0,0,0-10.32,1.77,47.65,47.65,0,0,0-31,26.39A65.55,65.55,0,0,0,8.73,60.77a82.58,82.58,0,0,0-.49,11c0,1.85,0,3.71.2,5.54l.19,2.76c0,.92.22,1.82.32,2.73a58.6,58.6,0,0,0,6.18,20.65A50.71,50.71,0,0,0,17.86,108a48.49,48.49,0,0,0,3.3,4.1,39.28,39.28,0,0,0,8,6.79,46.31,46.31,0,0,0,20,6.74,67.06,67.06,0,0,0,21.63-1.3,62.07,62.07,0,0,0,10.34-3.24,94.6,94.6,0,0,0,9.92-4.84,89.72,89.72,0,0,0,17.72-12.91,72.49,72.49,0,0,0,7.29-8,58.1,58.1,0,0,0,5.69-9,52.27,52.27,0,0,0,3.75-9.85,50.38,50.38,0,0,0,1.56-10.35,55.6,55.6,0,0,0-3.18-20.64,7.42,7.42,0,1,1,14-4.86,7.34,7.34,0,0,1,.34,1.44v0a88.81,88.81,0,0,1,.13,25.17,67.49,67.49,0,0,1-8.1,23.62,68.67,68.67,0,0,1-7,10.21,82.13,82.13,0,0,1-8.42,8.86,97.75,97.75,0,0,1-19.77,13.77,101,101,0,0,1-10.92,5,76.89,76.89,0,0,1-11.7,3.47,75,75,0,0,1-24.24,1.17,56.41,56.41,0,0,1-23.26-8,46.69,46.69,0,0,1-9.57-8.06,55.74,55.74,0,0,1-3.94-4.86,59.25,59.25,0,0,1-3.22-5.32A70.23,70.23,0,0,1,1.05,83.91c-.13-1-.32-2-.4-3l-.27-3c-.22-2-.24-4-.31-6a91.06,91.06,0,0,1,.33-12A76.81,76.81,0,0,1,6.26,36.3,58.58,58.58,0,0,1,20.64,16.06a59.4,59.4,0,0,1,21.6-12.6A66.8,66.8,0,0,1,67.09.09,59.86,59.86,0,0,1,92,6.67a43.63,43.63,0,0,1,11,8.27,35.57,35.57,0,0,1,7.81,12.49l.12.35A8.12,8.12,0,1,1,95.68,33.3,9.72,9.72,0,0,1,95.36,32.16Z"/></g></g></svg>';
const pathChallenge2 = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 137.79 147.04"><defs><style>.cls-1{fill:#8c0303;}</style></defs><title>Asset 2</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M114.58,133.79c-.43.3-.67.44-1,.64l-.89.53c-.59.35-1.17.68-1.75,1-1.17.64-2.34,1.24-3.52,1.82-2.37,1.14-4.75,2.2-7.17,3.16a89.25,89.25,0,0,1-15,4.5,72.13,72.13,0,0,1-31.39-.25,65.56,65.56,0,0,1-14.76-5.59,66.81,66.81,0,0,1-6.72-4,62.42,62.42,0,0,1-6.21-4.81A73.45,73.45,0,0,1,8.1,105.89,91.4,91.4,0,0,1,.37,76.61,86.21,86.21,0,0,1,2.81,46.46,61,61,0,0,1,17.55,19.74a53.09,53.09,0,0,1,12.32-9.38,74.87,74.87,0,0,1,14-6A93.85,93.85,0,0,1,73.51,0a83.53,83.53,0,0,1,29.66,5.44,59.92,59.92,0,0,1,13.54,7.35,49.6,49.6,0,0,1,11.05,11.07A46.71,46.71,0,0,1,134.63,38l.52,1.9.45,1.84c.27,1.23.54,2.47.77,3.71.46,2.49.82,5,1.06,7.54a68.29,68.29,0,0,1-3.65,30.45,53.66,53.66,0,0,1-19,24.83c-8.6,6.23-18.7,9.81-28.8,11.64a111,111,0,0,1-15.26,1.62c-5.09.18-10.16,0-15.2-.26a6.56,6.56,0,0,1,.79-13.09l.63.07a111.9,111.9,0,0,0,13.74,1.34,85.92,85.92,0,0,0,13.63-.53,64.27,64.27,0,0,0,13.12-2.91,49.52,49.52,0,0,0,11.87-5.74A44.16,44.16,0,0,0,119,91.67a44.83,44.83,0,0,0,6.62-11.37c3.35-8.23,4.35-17.46,3.64-26.58q-.25-3.42-.83-6.83c-.19-1.14-.41-2.27-.65-3.4l-.37-1.69L127,40.19a38.9,38.9,0,0,0-5.54-11.89c-5-7.26-12.61-12.63-21-16a75.61,75.61,0,0,0-27-5.2,87.35,87.35,0,0,0-27.46,4A68.84,68.84,0,0,0,33.32,16.5a43.41,43.41,0,0,0-10.61,8.2A53.85,53.85,0,0,0,10.07,48.4,72.07,72.07,0,0,0,7.94,62a80.66,80.66,0,0,0,.4,13.81A84.08,84.08,0,0,0,11,89.33a74.21,74.21,0,0,0,5,12.82,63.2,63.2,0,0,0,16.48,21.17,57.39,57.39,0,0,0,11.26,7,51.68,51.68,0,0,0,12.5,4.08,55.1,55.1,0,0,0,13.08.85,62.28,62.28,0,0,0,13-2.19,76.17,76.17,0,0,0,12.5-4.67c2-1,4-2,5.88-3.13,1-.56,1.89-1.15,2.79-1.75l1.33-.9.63-.45c.18-.14.45-.33.5-.39a7.45,7.45,0,0,1,10.42,10.64,7.26,7.26,0,0,1-1,.83Z"/></g></g></svg>';
const pathChallenge3 = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 113.01 111.89"><defs><style>.cls-1{fill:#8c0303;}</style></defs><title>Asset 3</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M74,44l-.31-.21c-.13-.09-.27-.18-.43-.27s-.59-.38-.92-.55c-.62-.38-1.29-.72-1.95-1.07s-1.36-.66-2-1L66.28,40a51.66,51.66,0,0,0-8.79-2.54,47.1,47.1,0,0,0-9.09-.91,43.61,43.61,0,0,0-4.57.27l-2.27.26-2.26.44c-1.49.23-3,.71-4.58,1.11-.78.19-1.52.45-2.27.69s-1.5.48-2.24.75A50,50,0,0,0,21.89,44,26,26,0,0,0,10.75,57,30.45,30.45,0,0,0,8.9,65.59a38.23,38.23,0,0,0,.53,9.1,36.36,36.36,0,0,0,2.72,8.66,30.8,30.8,0,0,0,5,7.48,36.55,36.55,0,0,0,15.33,9.85,65.42,65.42,0,0,0,18.93,3.44l2.45.12,2.46,0h2.47l2.47-.1a47.45,47.45,0,0,0,9.48-1.06A38.39,38.39,0,0,0,87.23,95,44.63,44.63,0,0,0,98.46,80.15a58.83,58.83,0,0,0,5.29-18.27,62.87,62.87,0,0,0-.48-19,48,48,0,0,0-6.49-17.3A28.25,28.25,0,0,0,84.05,14.32a27.36,27.36,0,0,0-16.5-1.05,6.56,6.56,0,0,1-3-12.78,5.89,5.89,0,0,1,.71-.13l.16,0A46.35,46.35,0,0,1,77.32.42,37.5,37.5,0,0,1,88.88,4a38.08,38.08,0,0,1,9.63,7.07,44.92,44.92,0,0,1,6.93,9.27,52.91,52.91,0,0,1,4.43,10.3,64.94,64.94,0,0,1,2.43,10.73,75.06,75.06,0,0,1-.15,21.64,70,70,0,0,1-6.47,20.66,52.75,52.75,0,0,1-13.52,17.22,46.18,46.18,0,0,1-19.84,9.59,60.56,60.56,0,0,1-10.77,1.22l-2.63.12-2.64,0c-.88,0-1.75,0-2.64,0l-2.64-.1a75.89,75.89,0,0,1-21.14-3.67,44.52,44.52,0,0,1-18.8-11.76A40.06,40.06,0,0,1,4.61,87,44.51,44.51,0,0,1,1,76.32,42.3,42.3,0,0,1,2.19,53.81,33.32,33.32,0,0,1,8,43.58a41.4,41.4,0,0,1,8.65-7.69,60,60,0,0,1,9.91-5.18c.85-.34,1.71-.64,2.57-1s1.71-.65,2.58-.9c1.73-.52,3.41-1.11,5.28-1.5a58.81,58.81,0,0,1,22.35-1.06A63.34,63.34,0,0,1,70.3,28.86l2.65.95c.88.36,1.76.69,2.63,1.08s1.74.77,2.61,1.21c.43.2.88.45,1.32.68l.67.37c.23.14.45.26.78.47l.85.54A6.3,6.3,0,1,1,74,44Z"/></g></g></svg>';
const pathChallenge4 = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 102.49 91.03"><defs><style>.cls-1{fill:#8c0303;}</style></defs><title>Asset 4</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M60,.3c2.77,1.07,5.24,2.17,7.78,3.39s5,2.5,7.44,3.89a87.25,87.25,0,0,1,14,9.7c4.32,3.78,8.42,8.23,11,14a24.85,24.85,0,0,1,2.27,9.32,19.22,19.22,0,0,1,0,2.41c-.06.76-.11,1.52-.2,2.27s-.22,1.5-.36,2.25-.31,1.48-.49,2.22a40.07,40.07,0,0,1-8.31,15.7A61.9,61.9,0,0,1,80.16,76.78a91,91,0,0,1-14.81,8c-2.56,1.11-5.16,2.11-7.8,3l-2,.66c-.65.21-1.33.43-2.05.64-1.41.4-2.84.73-4.26,1a59.85,59.85,0,0,1-17.15.55,53.65,53.65,0,0,1-16.67-4.47,33.78,33.78,0,0,1-7.6-4.79A22.7,22.7,0,0,1,2,74,19,19,0,0,1,.39,69.32,20.81,20.81,0,0,1,0,64.52a38,38,0,0,1,1.35-8.78A55.81,55.81,0,0,1,8.53,40.06,57.37,57.37,0,0,1,20,27.2a45.21,45.21,0,0,1,15.47-8.41,37.66,37.66,0,0,1,18.23-.89l.13,0A4.71,4.71,0,0,1,52,27.17a4.63,4.63,0,0,1-.75-.22,23.2,23.2,0,0,0-13.74-.72,33.44,33.44,0,0,0-12.93,6.64A50.32,50.32,0,0,0,14.44,44,46.69,46.69,0,0,0,8.08,57.56a31.4,31.4,0,0,0-1.14,7.16A12.86,12.86,0,0,0,8.17,71c1.85,3.86,5.77,6.88,10.2,8.92a46.56,46.56,0,0,0,14.48,3.8,52.54,52.54,0,0,0,15.09-.53c1.23-.23,2.43-.51,3.61-.85.58-.17,1.18-.37,1.81-.58s1.24-.41,1.85-.63c2.45-.87,4.88-1.84,7.25-2.9A84.57,84.57,0,0,0,76,70.69,52.77,52.77,0,0,0,87.19,60.58a32.22,32.22,0,0,0,6.52-12.77l.35-1.73c.1-.58.16-1.17.25-1.75s.08-1.18.13-1.77a14.77,14.77,0,0,0,0-1.63,16.82,16.82,0,0,0-1.64-6.28c-1.92-4.09-5.28-7.8-9.1-11A79.83,79.83,0,0,0,71,15.06q-3.4-1.87-6.95-3.52c-2.33-1.08-4.81-2.14-7.09-3l-.09,0A4.39,4.39,0,0,1,59.92.28Z"/></g></g></svg>';







const coordinates = {
  1: [-706, 620],
  2: [-668, 1308],
  3: [-827.5, 1599.5],
  4: [-668, 1308]
}


export default function initSearch() {
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


  const CustomIcon = L.Icon.extend({
    options: {
      iconSize: [60, 60],
      iconAnchor: [60, 60],
    },
  });


  let challengeElement = document.getElementsByClassName('challenge__wrapper')[0]
  challengeElement.addEventListener('click', showViewCodePopup, false)

  function showLoader(){
    let loaderContainer = document.getElementById('animation_container');
    loaderContainer.style.display = 'inherit'
  }
  
  function hideLoader(){
    let loaderContainer = document.getElementById('animation_container');
    loaderContainer.style.display = 'none'
  }
  

  async function handleSearch() {
    const answerInput = searchInput[0].value;
    searchInput[0].blur();
    showLoader();
    const challenges = await fetchChallenges();
    const answerKey = await checkAnswer(answerInput);
    hideLoader();

    const successOptions = {
      maxWidth: '400',
      width: '450',
      className: 'viewcode',
    };

    const duplicateOptions = {
      closeOnClick: false,
      maxWidth: '400',
      width: '450',
      className: 'popup__duplicate',
    };

    const codePopupOptions = {
      closeOnClick: false,
      maxWidth: '400',
      width: '450',
      className: 'popup__codes',
    };

    const correctPopupOptions = {
      closeOnClick: false,
      maxWidth: '400',
      width: '450',
      className: 'popup__correct',
    };

    const failPopupOptions = {
      maxWidth: '400',
      width: '450',
      className: 'popup__fail',
    };

    if (challenges[answerKey]) {
      
      var currentViewCenter = window.map.getCenter();
      var marker = L.marker(currentViewCenter).addTo(window.map);

      const markup = await showAlreadyCompletedPopUp()

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

    /* Cross icon */
      document.getElementsByClassName('challenge__icon challenge__1')[0].className = 'challenge__icon  challenge__1 challenge__1--complete';

      /* Show circle marker */
      const url = encodeURI(`data:image/svg+xml,${pathChallenge1}`).replace('#', '%23');
      const pathMarker = new CustomIcon({ iconUrl: url });
      let circleMarker = L.marker([-522, 1295], { icon: pathMarker, className: 'circleMarker' }).bindPopup('I am data URI SVG icon.').addTo(window.map);
      circleMarker._icon.className = "leaflet-marker-icon circleMarker leaflet-zoom-animated leaflet-interactive"

      /* Show Polaroid */
      const polaroidIcon = L.icon({
        iconUrl: stonehengeIcon,
        className: 'polaroid',
        iconSize: [38, 95], // size of the icon
        shadowSize: [50, 64], // size of the shadow
        iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62], // the same for the shadow
        popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
      });
      L.marker([-522, 1295], { icon: polaroidIcon }).addTo(window.map);

      /* Fly to Point */
      window.map.flyTo([-465, 1174], 1);

      /* Show popop */


      const marker = L.marker([-465, 1174]).addTo(window.map);
      const markup = await showSuccessPopUp();

      setTimeout(function() {
        let popup = marker.bindPopup(markup, correctPopupOptions)
        popup.on("popupclose", (marker) => { handlePopupClose(event, marker)});
        popup.on("popupopen", ()=> { handlePopupOpen() })
        popup.openPopup();
        const element = document.getElementsByClassName('popup_correct button')[0];
        element.addEventListener('click', showViewCodePopup, false);
      }, 750);
      




      /* Update challenge */
      updateChallenge('challenge1');

      
    } else if (answerKey === 'challenge2') {
    /* Gedi Ruins -- Kenya */
    /* Cross icon */
      document.getElementsByClassName('challenge__icon challenge__2')[0].className = 'challenge__icon challenge__2 challenge__2--complete';

      /* Show circle marker */
      const url = encodeURI(`data:image/svg+xml, ${pathChallenge2}`).replace('#', '%23');
      const pathMarker = new CustomIcon({ iconUrl: url, className: 'circleMarker'})
      debugger
      let circleMarker = L.marker([-830.0923638032468, 1554.33553663961], { icon: pathMarker }).bindPopup('I am data URI SVG icon.').addTo(window.map);

      circleMarker._icon.className = "leaflet-marker-icon circleMarker leaflet-zoom-animated leaflet-interactive"

      /* Show Polaroid */
      const polaroidIcon = L.icon({
        iconUrl: kenyaIcon,
        className: 'polaroid',
        iconSize: [38, 95], // size of the icon
        shadowSize: [50, 64], // size of the shadow
        iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62], // the same for the shadow
        popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
      });

      L.marker([-827.5, 1599.5], { icon: polaroidIcon }).addTo(window.map);



      /* Show popop */
      const marker = L.marker([-668, 1308]).addTo(window.map);
      const markup = await showSuccessPopUp();

      setTimeout(function() {
        let popup = marker.bindPopup(markup, correctPopupOptions)
        popup.on("popupclose", (marker) => { handlePopupClose(event, marker)});
        popup.on("popupopen", ()=> { handlePopupOpen() })
        popup.openPopup();
        const element = document.getElementsByClassName('popup_correct button')[0];
        element.addEventListener('click', showViewCodePopup, false);
        }, 750);





      /* Fly to location */
      window.map.flyTo([-668, 1308], 1);

      /* Update challenge */
      updateChallenge('challenge2');


    } else if (answerKey === 'challenge3') {
    /* Forbidden City -- China */

    /* Cross icon */
      document.getElementsByClassName('challenge__icon challenge__3')[0].className = 'challenge__icon challenge__3 challenge__3--complete';

      /* Fly to Point */
      window.map.flyTo([-474, 1683], 1);

      /* Show circle marker */
      const url = encodeURI(`data:image/svg+xml,${pathChallenge3}`).replace('#', '%23');
      const pathMarker = new CustomIcon({ iconUrl: url, className: 'cirlceMarker'});


      let circleMarker = L.marker([-568.076913031732, 1995.321254295155], { icon: pathMarker }).bindPopup('I am data URI SVG icon.').addTo(window.map);

      circleMarker._icon.className = "leaflet-marker-icon circleMarker leaflet-zoom-animated leaflet-interactive"

      /* Show Polaroid -- */
      const polaroidIcon = L.icon({
        iconUrl: chinaIcon,
        className: 'polaroid',
        iconSize: [38, 95], // size of the icon
        shadowSize: [50, 64], // size of the shadow
        iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62], // the same for the shadow
        popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
      });

      L.marker([-547, 2042], { icon: polaroidIcon }).addTo(window.map);

      /* Show popop */
      const marker = L.marker([-474, 1683]).addTo(window.map);
      const markup = await showSuccessPopUp();

      setTimeout(function() {
        let popup = marker.bindPopup(markup, correctPopupOptions)
        popup.on("popupclose", (marker) => { handlePopupClose(event, marker)});
        popup.on("popupopen", ()=> { handlePopupOpen() })
        popup.openPopup();
        const element = document.getElementsByClassName('popup_correct button')[0];
        element.addEventListener('click', showViewCodePopup, false);
        }, 750);




      /* Update challenge */
      updateChallenge('challenge3');
    } else if (answerKey === 'challenge4') {
    /* Pyramid of the Suns -- Mexico */

    /* Cross icon */
      document.getElementsByClassName('challenge__icon challenge__4')[0].className = 'challenge__icon challenge__4 challenge__4--complete';

      /* Fly to Point */
      window.map.flyTo([-585.7060241699219, 632.9839477539062], 1);

      /* Show circle marker */
      const url = encodeURI(`data:image/svg+xml,${pathChallenge4}`).replace('#', '%23');
      const pathMarker = new CustomIcon({ iconUrl: url });
      let circleMarker = L.marker([-739, 747], { icon: pathMarker }).bindPopup('I am data URI SVG icon.').addTo(window.map);
      circleMarker._icon.className = "leaflet-marker-icon circleMarker leaflet-zoom-animated leaflet-interactive"

      /* Show Polaroid */
      const polaroidIcon = L.icon({
        iconUrl: mexicoIcon,
        className: 'polaroid',
        iconSize: [38, 95], // size of the icon
        shadowSize: [50, 64], // size of the shadow
        iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62], // the same for the shadow
        popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
      });

      L.marker([-769.208961825107, 813.0431918688164], { icon: polaroidIcon }).addTo(window.map);

      /* Show popop */
      const marker = L.marker([-585.7060241699219, 632.9839477539062]).addTo(window.map);
      const markup = await showSuccessPopUp();

      setTimeout(function() {
          let popup = marker.bindPopup(markup, correctPopupOptions)
          popup.on("popupclose", (marker) => { handlePopupClose(event, marker)});
          popup.on("popupopen", ()=> { handlePopupOpen() })
          popup.openPopup();
          const element = document.getElementsByClassName('popup_correct button')[0];
          element.addEventListener('click', showViewCodePopup, false);
        }, 750);







      /* Update challenge */
      updateChallenge('challenge4');


    } else if (answerKey === 'challenge5') {
    /* Niagra Falls  -- USA */

    /* Cross icon */
      document.getElementsByClassName('challenge__icon challenge__5')[0].className = 'challenge__icon challenge__5 challenge__5--complete';

      /* Show circle marker */
      const url = encodeURI(`data:image/svg+xml,${pathChallenge4}`).replace('#', '%23');
      const pathMarker = new CustomIcon({ iconUrl: url });
      let circleMarker = L.marker([-617, 1419], { icon: pathMarker }).bindPopup('I am data URI SVG icon.').addTo(window.map);
      circleMarker._icon.className = "leaflet-marker-icon circleMarker leaflet-zoom-animated leaflet-interactive"

      /* Show Polaroid */
      const polaroidIcon = L.icon({
        iconUrl: niagaraIcon,
        className: 'polaroid',
        iconSize: [38, 95], // size of the icon
        shadowSize: [50, 64], // size of the shadow
        iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62], // the same for the shadow
        popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
      });
      L.marker([-567.5, 851], { icon: polaroidIcon }).addTo(window.map);


      /* Show popop */
      const marker = L.marker([-617, 1419]).addTo(window.map);
      const markup = await showSuccessPopUp();

      setTimeout(function() {
        let popup = marker.bindPopup(markup, correctPopupOptions)
        popup.on("popupclose", (marker) => { handlePopupClose(event, marker)});
        popup.on("popupopen", ()=> { handlePopupOpen() })
        popup.openPopup();
        const element = document.getElementsByClassName('popup_correct button')[0];
        element.addEventListener('click', showViewCodePopup, false);
      }, 750);




      /* Fly to Point */
      window.map.flyTo([-617, 1419], 1);


      /* Update challenge */
      updateChallenge('challenge5');

      
    } else {

      /* Show popop */
      window.map.flyTo([-281.0806053100124, 2210.8239225493235], 1);


      const markup = await showFailPopUp();

debugger
      setTimeout(function() {
        var currentViewCenter = window.map.getCenter();
        var marker = L.marker(currentViewCenter).addTo(window.map);
        let popup = marker.bindPopup(markup, correctPopupOptions)
          
        popup.on("popupclose", (marker) => { handlePopupClose(event, marker)});
        popup.on("popupopen", ()=> { handlePopupOpen() })
        popup.openPopup();
      }, 2200);

      /* Fly to Point */
  

    }
  }
}

function handlePopupClose(event, popup) {
  debugger
  let map = window.map
  map.dragging.enable();
  map.touchZoom.enable();
  map.doubleClickZoom.enable();
  map.scrollWheelZoom.enable();
  const tabElement = document.getElementsByClassName('tab__container')[0];
  tabElement.setAttribute("style", "display: inherit" )

  const layerElement = document.getElementsByClassName('leaflet-overlay-pane')[0].className = "leaflet-pane leaflet-overlay-pane"



}

function handlePopupOpen() {
  const closeButton = document.getElementsByClassName('leaflet-popup-close-button');
  debugger
    closeButton[0].innerHTML = ''
}

async function showFailPopUp() {

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
  map.dragging.disable();
  map.touchZoom.disable();
  map.doubleClickZoom.disable();
  map.scrollWheelZoom.disable();

  return markup;
}


async function showSuccessPopUp() {
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

async function showAlreadyCompletedPopUp() {
  /* Already completed popup */
  const markup = document.createElement('div');
  markup.className = 'popup__correct';
  markup.insertAdjacentHTML('afterbegin', `<div class="message">You’ve already uncovered that one. Check out my Field Notes for intel on the other landmarks.</div>`);
  markup.insertAdjacentHTML('afterbegin', `<div class="header">Nice try!</div>`);

  const tabElement = document.getElementsByClassName('tab__container')[0];
  tabElement.setAttribute("style", "display: none" )

 const mapElement = document.getElementsByClassName('leaflet-overlay-pane')[0].className= "leaflet-pane leaflet-overlay-pane hide-map"

 const popupElement = window.map._panes["popupPane"].className = "leaflet-pane leaflet-popup-pane unhide-map"

  return markup;
}

async function showViewCodePopup() {
 // const marker = L.marker([-668, 1308]).addTo(window.map);





  const markup = document.createElement('div');
  markup.className = 'popup__code';
  markup.insertAdjacentHTML('afterbegin', '<div class="header">Well done</div>');

  const viewCodeOptions = {
    maxWidth: '400',
    width: '450',
    className: 'popup__code popup__wrapper',
  };

  const codePopupOptions = {
    maxWidth: '400',
    width: '450',
    className: 'popup__codes',
  };
  const challengespProgress = await fetchCompletedChallenges();
  const landmarkCodes = {
    challenge1: 'lorem ipsum challenge.',
    challenge2: 'lorem ipsum challenge.',
    challenge3: 'lorem ipsum challenge.',
    challenge4: 'lorem ipsum challenge.',
    challenge5: 'lorem ipsum challenge.',
  };

  for (let i = 0; i < challengespProgress.length; i++) {
    markup.firstElementChild.insertAdjacentHTML('afterend', `<div class="popup__container"><div class="text">${landmarkCodes[challengespProgress[i]]}</div></div>`);
  }
  markup.firstElementChild.insertAdjacentHTML('afterend', '<div class="message"> Find all landmarks to complete the code</div>');

  var currentViewCenter = window.map.getCenter();
  var marker = L.marker(currentViewCenter).addTo(window.map);
  marker.bindPopup(markup,  codePopupOptions).openPopup();

 
}

const text = {
  1: {
    heading: 'Well done!',
    message: 'I couldn’t have done that better myself. Make sure you follow @CroftHoldingsAU on Facebook for intel on the next landmark.',
  },
  2: {
    heading: 'It’s a match',
    message: 'Each landmark brings us a step closer, keep it up.',
  },
  3: {
    heading: 'Brilliant!',
    message: 'You’re going to put me out of a job at this rate. I’m already working with @CroftHoldingsAU to find the next clue, follow them on Facebook.',
  },
  4: {
    heading: 'Good job',
    message: 'I still can’t make sense of this blasted riddle. One more piece should do it.',
  },
  5: {
    heading: 'You’ve done it!',
    message: 'The code is complete, now we have to figure out what it means. Ready for one last adventure?',
  },
};


const failText = {
  1: {
    heading: 'Incorrect',
    message: 'Unless there was a typo, something’s gone awry. Retrace your steps and try again.',
  },
  2: {
    heading: 'Damn it!',
    message: 'The intel was solid but what you entered was incorrect. Try visiting @CroftHoldingsAU to see if any of your fellow tomb raiders have any ideas.',
  },
  3: {
    heading: 'Need some help?',
    message: 'There are five sticky notes on the map that contain clues to the landmarks. They might be just what you’re looking for.',
  }
};
