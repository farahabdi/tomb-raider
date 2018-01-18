/* eslint-disable */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { authActions } from '../actions';
import PinchView from '../components/PinchView';
import initApp from './initMap'
import initSearch from './searchBox'
import { fetchChallenges } from '../api/index'

import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { firebase } from '@firebase/app';
import { firebaseAuth } from '../utils/config';
import { initialiseApp } from '../actions/authActions';
import { initChallenges } from './initChallenges'

class AuthenticatedPage extends Component {

  componentWillMount() {
    authActions.initialiseApp();
  }

  componentDidMount() { 
    initApp()
    initApp().init()
    initSearch()
    initChallenges()
  
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