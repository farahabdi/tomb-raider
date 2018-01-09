import React from 'react';
import { connect } from 'react-redux';
import { authActions } from '../actions';
import Button from './Button';

const SignInPage = ({signInWithFacebook}) => {
  return (
    <div>
      <div>
        <h1>Sign in</h1>
        <Button onClick={signInWithFacebook}>Facebook</Button>
      </div>
    </div>
  );
};


const mapDispatchToProps = {
    signInWithFacebook: authActions.signInWithFacebook
};

export default connect( null, mapDispatchToProps)(SignInPage)

