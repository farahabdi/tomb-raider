import React, { Component } from 'react';
import firebase from 'firebase'
import { connect } from 'react-redux';
import { authActions } from '../actions';
import { getAuth } from '../reducers/selectors'
import { db } from '../utils/config'
import Header from '../components/Header';
import SignInPage from '../pages/signIn';
import LandingPage from '../pages/landing';


class App extends Component {
  state = {
    challenges: []
  }

  componentWillMount() {
    this.unsubscribeQueryListener = db
    const user = firebase.auth().currentUser;

    if (user) {
      // Create a new record if user does not exist in database.
      // Otherwise pull user data (challenges) if user already exists.
      let newUser = true
      const userRef = db.collection('users').doc(`${user.uid}`)

      userRef.get().then(user => {
        if (user.exists) { newUser = false }
        console.log(newUser)
      })

      if (newUser) {
        userRef.set({
          uid: user.uid,
          displayName: user.displayName,
          challenge1: false,
          challenge2: false,
          challenge3: false,
          challenge4: false,
          challenge5: false
        })
      }
    }
  }

    render() {
      let { authenticated, signOut } = this.props

      return (
        <div>
        <Header
          authenticated={authenticated}
          signOut={signOut}
        />
        <main>
          {authenticated ? (
            <LandingPage />
          ) : (
            <SignInPage  />
          )}
        </main>
      </div>
      )
    }
}

const mapStateToProps = getAuth;

const mapDispatchToProps = {
  signOut: authActions.signOut
};

export default connect( mapStateToProps, mapDispatchToProps )(App)


