
/* eslint-disable */
import { firebaseAuth } from '../utils/config'
import { db } from '../utils/config';
import { updateChallenge, checkAnswer, fetchChallenges, fetchCompletedChallenges } from '../api/index'
import initApp from './initMap'
import { pathChallenge_1, pathChallenge_2, pathChallenge_3, pathChallenge_4 } from '../utils'

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

        
    document.getElementsByClassName('challenge__1')[0].src = 'https://i.imgur.com/Q24mwMo.png'
    document.getElementsByClassName('challenge__2')[0].src = 'https://i.imgur.com/FQfXCwv.png'
    document.getElementsByClassName('challenge__3')[0].src = 'https://i.imgur.com/PPjvBQl.png'
    document.getElementsByClassName('challenge__4')[0].src = 'https://i.imgur.com/sFfZ8DU.png'
    document.getElementsByClassName('challenge__5')[0].src = 'https://i.imgur.com/sFfZ8DU.png'

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
            /* Cross icon */
            document.getElementsByClassName('challenge__1')[0].src = 'https://i.imgur.com/Tnzujx4.png'

            /* Fly to Point */
            window.map.flyTo([-465, 1174], 1)    

            /* Show circle marker */
            var url = encodeURI("data:image/svg+xml," +  pathChallenge_1).replace('#','%23');
            var pathMarker = new CustomIcon({iconUrl: url})
            L.marker([ -617, 1419], {icon: pathMarker }).bindPopup("I am data URI SVG icon.").addTo(window.map);

            /* Show popop */
            let marker = L.marker([-465, 1174]).addTo(map);
            let markup = await createMarkup()
            marker.bindPopup(markup, successOptions).openPopup();
            let element = document.getElementsByClassName('viewcode__button')[0]
            element.addEventListener('click', showViewCodePopup, false)

            /* Update challenge */
            updateChallenge('challenge1')
        } else if (answerKey === 'challenge2') {
             /* Cross icon */
            document.getElementsByClassName('challenge__2')[0].src = 'https://i.imgur.com/vp5VXcp.png'

            /* Fly to location */
            window.map.flyTo([-668, 1308], 1)

            /* Show circle marker */
            var url = encodeURI("data:image/svg+xml," +  pathChallenge_1).replace('#','%23');
            var pathMarker = new CustomIcon({iconUrl: url})
            L.marker([ -617, 1419], {icon: pathMarker }).bindPopup("I am data URI SVG icon.").addTo(window.map);

            /* Show Polaroid */

            /* Show popop */
            let marker = L.marker([-668, 1308]).addTo(map);
            let firstName = user.displayName.split(' ').slice(0, -1).join(' ');
            let markup = await createMarkup()
            marker.bindPopup(markup, successOptions).openPopup();
            let element = document.getElementsByClassName('viewcode__button')[0]
            element.addEventListener('click', showViewCodePopup, false)

            /* Update challenge */
            updateChallenge('challenge2')
        } else if (answerKey === 'challenge3') {
             /* Cross icon */
            document.getElementsByClassName('challenge__3')[0].src = 'https://i.imgur.com/zikZBt3.png'

            /* Fly to Point */
            window.map.flyTo([-474, 1683], 1)

            /* Show circle marker */
            var url = encodeURI("data:image/svg+xml," +  pathChallenge_1).replace('#','%23');
            var pathMarker = new CustomIcon({iconUrl: url})
            L.marker([ -617, 1419], {icon: pathMarker }).bindPopup("I am data URI SVG icon.").addTo(window.map);

            /* Show popop */
            let marker = L.marker([-474, 1683]).addTo(map);
            let markup = await createMarkup()
            marker.bindPopup(markup, successOptions).openPopup();
            let element = document.getElementsByClassName('viewcode__button')[0]
            element.addEventListener('click', showViewCodePopup, false)

            /* Update challenge */
            updateChallenge('challenge3')
        } else if (answerKey === 'challenge4') {
             /* Cross icon */
            document.getElementsByClassName('challenge__4')[0].src = 'https://i.imgur.com/rdioy0g.png'

            /* Fly to Point */
            window.map.flyTo([-585.7060241699219, 632.9839477539062], 1)

            /* Show circle marker */
            var url = encodeURI("data:image/svg+xml," +  pathChallenge_4).replace('#','%23');
            var pathMarker = new CustomIcon({iconUrl: url})
            L.marker([-739, 747], {icon: pathMarker }).bindPopup("I am data URI SVG icon.").addTo(window.map);
            

           /* Show popop */
            let marker = L.marker([-585.7060241699219, 632.9839477539062]).addTo(map);
            let markup = await createMarkup()
            marker.bindPopup(markup, successOptions).openPopup();
            let element = document.getElementsByClassName('viewcode__button')[0]
            element.addEventListener('click', showViewCodePopup, false)

             /* Update challenge */
            updateChallenge('challenge4')
        } else if (answerKey === 'challenge5') {
             /* Cross icon */
            document.getElementsByClassName('challenge__5')[0].src = 'https://i.imgur.com/lvhAJKO.png'

            /* Fly to Point */
            window.map.flyTo([-617, 1419], 1)

            /* Show circle marker */
            var url = encodeURI("data:image/svg+xml," +  pathChallenge_1).replace('#','%23');
            var pathMarker = new CustomIcon({iconUrl: url})
            L.marker([ -617, 1419], {icon: pathMarker }).bindPopup("I am data URI SVG icon.").addTo(window.map);

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


  

