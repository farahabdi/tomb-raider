
/* eslint-disable */
import { firebaseAuth } from '../utils/config'
import { db } from '../utils/config';

export default function initSearch() {

    let searchElement = document.getElementsByClassName('search__icon')


    for (let i = 0; i < searchElement.length; i++) {
        searchElement[i].addEventListener("click", modifyText);
    }


    debugger
    



    document.getElementsByClassName('challenge__1')[0].src = 'https://i.imgur.com/Q24mwMo.png'
    document.getElementsByClassName('challenge__2')[0].src = 'https://i.imgur.com/FQfXCwv.png'
    document.getElementsByClassName('challenge__3')[0].src = 'https://i.imgur.com/PPjvBQl.png'
    document.getElementsByClassName('challenge__4')[0].src = 'https://i.imgur.com/sFfZ8DU.png'
    document.getElementsByClassName('challenge__5')[0].src = 'https://i.imgur.com/sFfZ8DU.png'

    
    async function modifyText() {
        let searchInput = document.getElementsByClassName('search__input')
        let answerInput = searchInput[0].value
        let result = await checkAnswer(answerInput)

        const user = firebaseAuth.currentUser;


        if (result.challenge1 == answerInput) {
            document.getElementsByClassName('challenge__1')[0].src = 'https://i.imgur.com/Tnzujx4.png'

            
            let challenges = {};
            db.collection('users')
              .doc(user.uid)
              .collection('challenges')
              .doc(user.uid)
              .set({
                  challenge1: true
              })


            
        } else if (result.challenge2 == answerInput) {
            document.getElementsByClassName('challenge__2')[0].src = 'https://i.imgur.com/vp5VXcp.png'


            db.collection('users')
              .doc(user.uid)
              .collection('challenges')
              .doc(user.uid)
              .set({
                  challenge2: true
              })


        } else if (result.challenge3 == answerInput) {
            document.getElementsByClassName('challenge__3')[0].src = 'https://i.imgur.com/zikZBt3.png'


            db.collection('users')
              .doc(user.uid)
              .collection('challenges')
              .doc(user.uid)
              .set({
                  challenge3: true
              })


        } else if (result.challenge4 == answerInput) {
            document.getElementsByClassName('challenge__4')[0].src = 'https://i.imgur.com/rdioy0g.png'

            db.collection('users')
              .doc(user.uid)
              .collection('challenges')
              .doc(user.uid)
              .set({
                  challenge4: true
              })



        } else if (result.challenge5 == answerInput) {
            document.getElementsByClassName('challenge__5')[0].src = 'https://i.imgur.com/lvhAJKO.png'


            db.collection('users')
              .doc(user.uid)
              .collection('challenges')
              .doc(user.uid)
              .set({
                  challenge5: true
              })


        }



      

      }


  }



  export async function checkAnswer(text) {
    const user = firebaseAuth.currentUser;

    let result = false

   return db.collection('challengeAnswers')
      .doc('challenges')
      .get()
      .then((result) => {
          return result.data();
      })
  }
  
  
  export async function saveChallenge(text) {
    const user = firebaseAuth.currentUser;

    db.collection('users')
      .doc(user.uid).set({
        name: "Los Angeles",
        state: "CA",
        country: "USA"
    })
  }
  
  

