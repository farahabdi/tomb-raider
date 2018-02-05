/* eslint-disable */
import firebase from 'firebase';
import { db } from '../utils/config';

export async function fetchUserExists() {
  let userExists = false;
  const user = firebase.auth().currentUser;
  await db.collection('users')
    .doc(user.uid)
    .get()
    .then((doc) => { userExists = doc.exists === true; });

  return userExists;
}

export async function fetchUserVisited() {
  let userVisited= false;
  const user = firebase.auth().currentUser;
  await db.collection('users')
    .doc(user.uid)
    .get()
    .then((doc) => { 
    
      return userVisited = doc.data().visited === true;
     });

  return userVisited;
}

export async function updateVisited() {
  const user = firebase.auth().currentUser;
  db.collection('users')
  .doc(user.uid)
  .update({
     "visited": true
  })
}

export async function fetchChallenges() {
  const user = firebaseAuth.currentUser;
  return db.collection('users')
      .doc(user.uid)
      .collection('challenges')
      .doc(user.uid)
      .get()
      .then((result) => {
          return result.data();
      })
}



export async function fetchCompletedChallenges(text) {
  const user = firebaseAuth.currentUser;
  return db.collection('users')
      .doc(user.uid)
      .collection('challenges')
      .doc(user.uid)
      .get()
      .then((result) => {

        let data = result.data()
        let challenges = []
        for (const prop in data) {
    
          if (data[prop] == true) {
            challenges.push(prop)
          }
        }
        
        return challenges
      })
}

export async function fetchFacebookPosts() {
  return db.collection('content')
      .doc('facebook')
      .get()
      .then((result) => {
          return result.data().posts;
      })
}


export async function updateChallenge(challenge) {
  const user = firebase.auth().currentUser;
  db.collection('users')
  .doc(user.uid)
  .collection('challenges')
  .doc(user.uid)
  .update({
      [`${challenge}`]: true
  })
}

//returns either the challengeKey for a correct answer (ie 'challenge3') or null for no match
export async function checkAnswer(text) {
  const user = firebaseAuth.currentUser;
  let result = null
  return db.collection('challengeAnswers')
      .doc('challenges')
      .get()
      .then((getResult) => {
     
          let answerKey = null
          const challenges = getResult.data()
          const keys = Object.keys(challenges)
          keys.forEach(key => {
            const answers = challenges[key]
            if(Array.isArray(answers)){
              answers.forEach(answer => {
                if(answer.toUpperCase() == text.toUpperCase()){
                   answerKey = key
                }
              })
            } else if(answers.toUpperCase() == text.toUpperCase()){
              answerKey = key
            }
          });
          return answerKey;
      })
}

export async function createUser() {
  const user = firebase.auth().currentUser;
  const userRef = db.collection('users').doc(user.uid);

  userRef.set({
    uid: user.uid,
    photoURL: user.photoURL,
    displayName: user.displayName,
    birthday: '',
    visited: false,
    email: user.email,
  });

  userRef.collection('challenges')
    .doc(user.uid)
    .set({
      challenge1: false,
      challenge2: false,
      challenge3: false,
      challenge4: false,
      challenge5: false,
    });
}
