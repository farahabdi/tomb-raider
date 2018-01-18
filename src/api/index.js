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

export async function fetchChallenges() {
  const user = firebase.auth().currentUser;
  let challenges = {};
  var x = await db.collection('users')
    .doc(user.uid)
    .collection('challenges')
    .doc(user.uid)
    .onSnapshot((querySnapshot) => { 
      var x = 3
    
      challenges = querySnapshot.data();
      window.challenges = challenges;
     });

   

  return challenges;
}

export async function createUser() {
  const user = firebase.auth().currentUser;
  const userRef = db.collection('users').doc(user.uid);

  userRef.set({
    uid: user.uid,
    photoURL: user.photoURL,
    displayName: user.displayName,
    birthday: '',
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
