import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { authActions } from '../actions';

export class AuthenticatedPage extends Component {
  componentWillMount() {
    authActions.initialiseApp();
  }

  render() {
    const { signOut } = this.props;
    return (
      <main>
        <h1>Sign out</h1>
        <button onClick={signOut}>Facebook</button>
      </main>
    );
  }
}

AuthenticatedPage.propTypes = {
  signOut: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  signOut: authActions.signOut,
};

export default connect(null, mapDispatchToProps)(AuthenticatedPage);
