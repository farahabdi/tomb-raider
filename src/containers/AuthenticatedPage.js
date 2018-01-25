/* eslint-disable */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { initialiseApp } from '../actions/authActions';
import { initApp, initPanel, initUserMap } from '../leaflet';
import { firebase } from '@firebase/app';
import { firebaseAuth } from '../utils/config';
import { connect } from 'react-redux';
import { authActions } from '../actions';
import { fetchChallenges } from '../api/index'


class AuthenticatedPage extends Component {

  componentWillMount() {
    authActions.initialiseApp();
  }

  componentDidMount() { 
    initApp()
    initPanel()
    initUserMap()
  }

  getContainerStyle(ratio) {
    return {
      paddingTop: ratio.toFixed(2) + '%',
      overflow: 'hidden',
      position: 'relative'
    }
  }

  render() {
    const { scale, handleZoomChange } = this.props;
  

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