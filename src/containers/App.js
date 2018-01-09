import React from 'react';
import { connect } from 'react-redux';
import { authActions } from '../actions';
import { getAuth } from '../reducers/selectors'
import Header from '../components/Header';

import SignInPage from '../components/sign-in-page';
import LandingPage from '../pages/landing';


const App = ({authenticated, signOut}) => (
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
);


//=====================================
//  CONNECT
//-------------------------------------

const mapStateToProps = getAuth;

const mapDispatchToProps = {
  signOut: authActions.signOut
};

export default connect( mapStateToProps, mapDispatchToProps )(App)


