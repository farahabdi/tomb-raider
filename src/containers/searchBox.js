
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


    // Icon markers
    var CustomIcon = L.Icon.extend({
        options: {
          iconSize:     [60, 60],
          shadowSize:   [50, 64],
          iconAnchor:   [22, 94],
          shadowAnchor: [4, 62],
          popupAnchor:  [-3, -76]
        }
      });
    
    async function handleSearch() {
        let searchInput = document.getElementsByClassName('search__input')
        let answerInput = searchInput[0].value
        searchInput[0].blur()
        let answerKey = await checkAnswer(answerInput)
        



        const user = firebaseAuth.currentUser;

        if (answerKey === 'challenge1') {
            document.getElementsByClassName('challenge__1')[0].src = 'https://i.imgur.com/Tnzujx4.png'
            // -465, 1174
            window.map.flyTo([-465, 1174], 1)    
            var url = encodeURI("data:image/svg+xml," +  pathChallenge_1).replace('#','%23');
            var pathMarker = new CustomIcon({iconUrl: url})
            L.marker([-465, 1174], {icon: pathMarker }).bindPopup("I am data URI SVG icon.").addTo(window.map);
            updateChallenge('challenge1')
        } else if (answerKey === 'challenge2') {
            document.getElementsByClassName('challenge__2')[0].src = 'https://i.imgur.com/vp5VXcp.png'


            /* Fly to location */
            window.map.flyTo([-668, 1308], 1)
            let url = encodeURI("data:image/svg+xml," +  pathChallenge_2).replace('#','%23');
            let pathMarker = new CustomIcon({iconUrl: url})
            L.marker([-668, 1308], {icon: pathMarker }).addTo(window.map);

            /* Show popop */

    

            let successOptions = {
                'maxWidth': '400',
                'width': '320',
                'width': '450',
                'className' : 'viewcode'
               }
            
            let customPopup = "<b>My office</b><br/><img src='http://netdna.webdesignerdepot.com/uploads/2014/05/workspace_06_previo.jpg' alt='maptime logo gif' width='150px'/>";
            let marker = L.marker([-668, 1308]).addTo(map);

            let firstName = user.displayName.split(' ').slice(0, -1).join(' ');

            let markup2 = `
            <div class="viewcode">
                <div class="viewcode__header">Well done! </div>
                <div class="viewcode__message"> I couldn't have done that better myself. Make sure you follow @CroftHoldingsAU on Facebook for intel on the next landmark</div>
                <div class="view">
                     <img src='markArrow.png' />
                    <div class="viewcode__button"> View code </div>
                </div>
                
            </div>
        `
            marker.bindPopup(markup2, successOptions).openPopup();

            let element = document.getElementsByClassName('viewcode__button')[0]
            element.addEventListener('click', showViewCodePopup, false)

            async function showViewCodePopup() {

                var markup = document.createElement("div");
                markup.className = "note"
                markup.insertAdjacentHTML('afterbegin', `<div class="note__header">Well done ${firstName} </div>` )  
                
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

      



            /* Update challenge */
            updateChallenge('challenge2')
        } else if (answerKey === 'challenge3') {
            document.getElementsByClassName('challenge__3')[0].src = 'https://i.imgur.com/zikZBt3.png'
            // -474, 1683ß
            
            window.map.flyTo([-474, 1683], 1)
            updateChallenge('challenge3')
        } else if (answerKey === 'challenge4') {
            document.getElementsByClassName('challenge__4')[0].src = 'https://i.imgur.com/rdioy0g.png'
               // -585.7060241699219, 632.9839477539062
            window.map.flyTo([-585.7060241699219, 632.9839477539062], 1)
            updateChallenge('challenge4')
        } else if (answerKey === 'challenge5') {
            document.getElementsByClassName('challenge__5')[0].src = 'https://i.imgur.com/lvhAJKO.png'
            updateChallenge('challenge5')
        }
      }
  }

  

