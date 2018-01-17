/* eslint-disable */
import firebase from 'firebase';
import { firebaseAuth } from '../utils/config';

import {
  fetchUserExists,
  createUser,
  fetchChallenges,
} from '../api';

import {
  INIT_AUTH,
  SIGN_IN_ERROR,
  SIGN_IN_SUCCESS,
  SIGN_OUT_SUCCESS,
  RECEIVED_CHALLENGES,
  NEW_USER_CREATED,
} from '../constants';

export const initialiseAuth = user => ({
  type: INIT_AUTH,
  payload: user,
});

export function initAuth(dispatch) {
  return new Promise((resolve, reject) => {
    const unsubscribe = firebaseAuth.onAuthStateChanged(
      (authUser) => {
        window.photoURL = authUser.photoURL
        dispatch(initialiseApp(authUser));
        dispatch(initialiseAuth(authUser));
        unsubscribe();
        resolve();
      },
      error => reject(error),
    );
  });
}

export const userCreated = () => ({
  type: NEW_USER_CREATED,
});

export const createNewUser = () =>
  (dispatch) => {
    createUser().then(() => {
      dispatch(userCreated());
    });
  };

export const receivedChallenges = challenges => ({
  type: RECEIVED_CHALLENGES,
  payload: challenges,
});

export const fetchUserChallenges = () =>
  (dispatch) => {
    fetchChallenges().then(challenges =>
      dispatch(receivedChallenges(challenges)));
  };

const receiveUserExists = userExists =>
  (dispatch) => {
    if (userExists) {
      dispatch(fetchUserChallenges());
    } else {
      dispatch(createNewUser());
    }
    
  };
export const fetchUsers = () =>
  (dispatch) => {
    fetchUserExists().then((userExists) => {
      dispatch(receiveUserExists(userExists));
    });
  };


export const initialiseApp = () => (
  (dispatch) => {
    dispatch(fetchUsers());
  }
);

export const signInSuccess = result => ({
  type: SIGN_IN_SUCCESS,
  payload: result.user,
});

export const signInError = error => ({
  type: SIGN_IN_ERROR,
  payload: error,
});

function authenticate(provider) {
  return (dispatch) => {
    firebaseAuth.signInWithRedirect(provider)
      .then(result => dispatch(signInSuccess(result)))
      .catch(error => dispatch(signInError(error)));
  };
}

export const signInWithFacebook = () => (
  authenticate(new firebase.auth.FacebookAuthProvider())
);

export const signOutSuccess = () => {
  return { type: SIGN_OUT_SUCCESS }
};

export const signOut = () =>
  (dispatch) => {
    firebaseAuth.signOut()
      .then(() => dispatch(signOutSuccess()));
  };
