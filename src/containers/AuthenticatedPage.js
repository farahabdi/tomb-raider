/* eslint-disable */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { initialiseApp } from '../actions/authActions';
import { initApp, initPanel, initUserMap } from '../leaflet';
import { firebase } from '@firebase/app';
import { firebaseAuth } from '../utils/config';
import { connect } from 'react-redux';
import { authActions } from '../actions';
import { fetchChallenges, checkUserExists } from '../api/index'


class AuthenticatedPage extends Component {

  async componentWillMount() {
    await authActions.initialiseApp();

  }

  async componentDidMount() { 
    await checkUserExists()
    await initApp()
    await initPanel()
    await initUserMap()
  }





  render() {
    return (
     <div id="map" className="map"></div>
    );
  }
}

AuthenticatedPage.propTypes = {

};

const mapDispatchToProps = {
  signOut: authActions.signOut,
};

export default connect(null, mapDispatchToProps)(AuthenticatedPage);