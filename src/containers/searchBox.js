
/* eslint-disable */
import { firebaseAuth } from '../utils/config'
import { db } from '../utils/config';
import { updateChallenge, checkAnswer, fetchChallenges, fetchCompletedChallenges } from '../api/index'
import initApp from './initMap'
import { pathChallenge_1, pathChallenge_2, pathChallenge_3, pathChallenge_4 } from '../utils'

import code1 from '../assets/code1_complete.png'
import code2 from '../assets/code2_complete.png'
import code3 from '../assets/code3_complete.png'
import code4 from '../assets/code4_complete.png'
import code5 from '../assets/code5_complete.png'

import chinaIcon from '../assets/Polaroid_China.png'
import italyIcon from '../assets/Polaroid_Italy.png'
import kenyaIcon from '../assets/Polaroid_Kenya.png'
import mexicoIcon from '../assets/Polaroid_Mexico.png'
import monasteryIcon from '../assets/Polaroid_Monastery.png'


export default function initSearch() {
    let searchElement = document.getElementsByClassName('search__icon')
    let searchInput = document.getElementsByClassName('search__input')

    for (let i = 0; i < searchElement.length; i++) {
        searchElement[i].addEventListener("click", handleSearch);
        searchInput[i].addEventListener('keyup', event => {
        event.preventDefault();
        if (event.keyCode === 13) {
            handleSearch()
        } 
        })   
    }


    var CustomIcon = L.Icon.extend({
        options: {
          iconSize:     [60, 60],
          iconAnchor:     [60, 60],
        }
      });

    // Icon markers
    let successOptions = {
        'maxWidth': '400',
        'width': '320',
        'width': '450',
        'className' : 'viewcode'
        }
    
    async function handleSearch() {
        let searchInput = document.getElementsByClassName('search__input')
        let answerInput = searchInput[0].value
        searchInput[0].blur()
        let answerKey = await checkAnswer(answerInput)

        let successOptions = {
            'maxWidth': '400',
            'width': '320',
            'width': '450',
            'className' : 'viewcode'
           }
        
        const user = firebaseAuth.currentUser;

        if (answerKey === 'challenge1') {
            /* Marcus Aurelius Column -- Italy */

            /* Cross icon */
            document.getElementsByClassName('challenge__1')[0].className = "challenge__1 challenge__1--complete"

            /* Fly to Point */
            window.map.flyTo([-465, 1174], 1)    

            /* Show circle marker */
            var url = encodeURI("data:image/svg+xml," +  pathChallenge_1).replace('#','%23');
            var pathMarker = new CustomIcon({iconUrl: url})
            L.marker([-726, 791], {icon: pathMarker }).bindPopup("I am data URI SVG icon.").addTo(window.map);


            /* Show Polaroid */
            let polaroidIcon = L.icon({
                iconUrl: italyIcon,
            
                iconSize:     [38, 95], // size of the icon
                shadowSize:   [50, 64], // size of the shadow
                iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
                shadowAnchor: [4, 62],  // the same for the shadow
                popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
            });
            L.marker([ -706, 620], {icon: polaroidIcon}).addTo(map);

            /* Show popop */
            let marker = L.marker([-465, 1174]).addTo(map);
            let markup = await createMarkup()
            marker.bindPopup(markup, successOptions).openPopup();
            let element = document.getElementsByClassName('viewcode__button')[0]
            element.addEventListener('click', showViewCodePopup, false)

            /* Update challenge */
            updateChallenge('challenge1')
        } else if (answerKey === 'challenge2') {

            /* Gedi Ruins -- Kenya */


             /* Cross icon */
            document.getElementsByClassName('challenge__2')[0].className = "challenge__2 challenge__2--complete"

            /* Fly to location */
            window.map.flyTo([-668, 1308], 1)

            /* Show circle marker */
            var url = encodeURI("data:image/svg+xml," +  pathChallenge_1).replace('#','%23');
            var pathMarker = new CustomIcon({iconUrl: url})
            L.marker([ -617, 1419], {icon: pathMarker }).bindPopup("I am data URI SVG icon.").addTo(window.map);

            /* Show Polaroid */
            let polaroidIcon = L.icon({
                iconUrl: kenyaIcon,
                className: "polaroid",
                iconSize:     [38, 95], // size of the icon
                shadowSize:   [50, 64], // size of the shadow
                iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
                shadowAnchor: [4, 62],  // the same for the shadow
                popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
            });
            L.marker([-827.5, 1599.5], {icon: polaroidIcon}).addTo(map);

            /* Show popop */
            let marker = L.marker([-668, 1308]).addTo(map);
            let markup = await createMarkup()
            marker.bindPopup(markup, successOptions).openPopup();
            let element = document.getElementsByClassName('viewcode__button')[0]
            element.addEventListener('click', showViewCodePopup, false)

            /* Update challenge */
            updateChallenge('challenge2')
        } else if (answerKey === 'challenge3') {
            /* Forbidden City -- China */

             /* Cross icon */
            document.getElementsByClassName('challenge__3')[0].className = "challenge__3 challenge__3--complete"

            /* Fly to Point */
            window.map.flyTo([-474, 1683], 1)

            /* Show circle marker */
            var url = encodeURI("data:image/svg+xml," +  pathChallenge_1).replace('#','%23');
            var pathMarker = new CustomIcon({iconUrl: url})
            L.marker([ -617, 1419], {icon: pathMarker }).bindPopup("I am data URI SVG icon.").addTo(window.map);


            /* Show Polaroid -- */
            let polaroidIcon = L.icon({
                iconUrl: chinaIcon,
            
                iconSize:     [38, 95], // size of the icon
                shadowSize:   [50, 64], // size of the shadow
                iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
                shadowAnchor: [4, 62],  // the same for the shadow
                popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
            });
            L.marker([-547, 2042], {icon: polaroidIcon}).addTo(map);

            /* Show popop */
            let marker = L.marker([-474, 1683]).addTo(map);
            let markup = await createMarkup()
            marker.bindPopup(markup, successOptions).openPopup();
            let element = document.getElementsByClassName('viewcode__button')[0]
            element.addEventListener('click', showViewCodePopup, false)

            /* Update challenge */
            updateChallenge('challenge3')
        } else if (answerKey === 'challenge4') {

            /* Pyramid of the Suns -- Mexico */

             /* Cross icon */
            document.getElementsByClassName('challenge__4')[0].className = "challenge__4 challenge__4--complete"

            /* Fly to Point */
            window.map.flyTo([-585.7060241699219, 632.9839477539062], 1)

            /* Show circle marker */
            var url = encodeURI("data:image/svg+xml," +  pathChallenge_4).replace('#','%23');
            var pathMarker = new CustomIcon({iconUrl: url})
            L.marker([-739, 747], {icon: pathMarker }).bindPopup("I am data URI SVG icon.").addTo(window.map);


            /* Show Polaroid */
            let polaroidIcon = L.icon({
                iconUrl: mexicoIcon,
            
                iconSize:     [38, 95], // size of the icon
                shadowSize:   [50, 64], // size of the shadow
                iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
                shadowAnchor: [4, 62],  // the same for the shadow
                popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
            });
            L.marker([-522, 1971], {icon: polaroidIcon}).addTo(map);
            

           /* Show popop */
            let marker = L.marker([-585.7060241699219, 632.9839477539062]).addTo(map);
            let markup = await createMarkup()
            marker.bindPopup(markup, successOptions).openPopup();
            let element = document.getElementsByClassName('viewcode__button')[0]
            element.addEventListener('click', showViewCodePopup, false)

             /* Update challenge */
            updateChallenge('challenge4')
        } else if (answerKey === 'challenge5') {
            /* Niagra Falls  -- USA */

             /* Cross icon */
            document.getElementsByClassName('challenge__5')[0].className = "challenge__5 challenge__5--complete"

            /* Fly to Point */
            window.map.flyTo([-617, 1419], 1)

            /* Show circle marker */
            var url = encodeURI("data:image/svg+xml," +  pathChallenge_1).replace('#','%23');
            var pathMarker = new CustomIcon({iconUrl: url})
            L.marker([ -617, 1419], {icon: pathMarker }).bindPopup("I am data URI SVG icon.").addTo(window.map);
            

            /* Show Polaroid */
            let polaroidIcon = L.icon({
                iconUrl: monasteryIcon,
                className: "polaroid",
                iconSize:     [38, 95], // size of the icon
                shadowSize:   [50, 64], // size of the shadow
                iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
                shadowAnchor: [4, 62],  // the same for the shadow
                popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
            });
            L.marker([-567.5, 851], {icon: polaroidIcon}).addTo(map);


            /* Show popop */
            let marker = L.marker([-617, 1419]).addTo(map);
            let markup = await createMarkup()
            marker.bindPopup(markup, successOptions).openPopup();
            let element = document.getElementsByClassName('viewcode__button')[0]
            element.addEventListener('click', showViewCodePopup, false)

            /* Update challenge */
            updateChallenge('challenge5')
        }
      }
  }

  async function createMarkup() {
    let challenges = await fetchChallenges()
    let num = 0
    Object.values(challenges).forEach((value) =>{ if (value == true) { num = num + 1 } })
    num++
    /* Success popup */   
    let markup = document.createElement("div");
    debugger
    markup.className = "viewcode"
    markup.insertAdjacentHTML('afterbegin', `<div class="view"><img src='markArrow.png' /><div class="viewcode__button"> View code </div></div>` )  
    markup.insertAdjacentHTML('afterbegin', `<div class="viewcode__message">${text[num].message}</div>` )
    markup.insertAdjacentHTML('afterbegin', `<div class="viewcode__header">${text[num].heading}</div>` )  

    return markup
  }

  async function showViewCodePopup(market) {
    let marker = L.marker([-668, 1308]).addTo(map);
    var markup = document.createElement("div");
    markup.className = "note"
    markup.insertAdjacentHTML('afterbegin', `<div class="note__header">Well done</div>` )  
    
    let viewCodeOptions = {
        'maxWidth': '400',
        'width': '320',
        'width': '450',
        'className' : 'popup__correct'
    }

    let challengespProgress = await fetchCompletedChallenges()
    let landmarkCodes = {
        'challenge1': 'lorem ipsum challenge.',
        'challenge2': 'lorem ipsum challenge.',
        'challenge3': 'lorem ipsum challenge.',
        'challenge4': 'lorem ipsum challenge.',
        'challenge5': 'lorem ipsum challenge.',
    }

    for (let i=0; i< challengespProgress.length; i++) {
            markup.firstElementChild.insertAdjacentHTML('afterend', `<div class="code__container"><div class="code__text">${landmarkCodes[challengespProgress[i]]}</div></div>` )    
        } 
        markup.firstElementChild.insertAdjacentHTML('afterend', '<div class="note__message"> Find all landmarks to complete the code</div>' )   
        marker.bindPopup(markup, viewCodeOptions).openPopup();
       
}

const text = {
    '1': {
        'heading': 'Well done!',
        'message': 'I couldn’t have done that better myself. Make sure you follow @CroftHoldingsAU on Facebook for intel on the next landmark.'
    },
    '2': {
        'heading': 'It’s a match',
        'message': 'Each landmark brings us a step closer, keep it up.'
    },
    '3': {
        'heading': 'Brilliant!',
        'message': 'You’re going to put me out of a job at this rate. I’m already working with @CroftHoldingsAU to find the next clue, follow them on Facebook.'
    },
    '4': {
        'heading': 'Good job',
        'message': 'I still can’t make sense of this blasted riddle. One more piece should do it.'
    },
    '5': {
        'heading': 'You’ve done it!',
        'message': 'The code is complete, now we have to figure out what it means. Ready for one last adventure?'
    }
}


  

