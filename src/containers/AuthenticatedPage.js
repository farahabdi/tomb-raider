/* eslint-disable */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { authActions } from '../actions';
import PinchView from '../components/PinchView';
import initMap from './initMap'

import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { firebase } from '@firebase/app';
import { firebaseAuth } from '../utils/config';

class AuthenticatedPage extends Component {

  componentWillMount() {
    authActions.initialiseApp();
  }

  componentDidMount() { 
    initMap()

    var htmlString = L.DomUtil.get("root")

    var d1 = document.getElementById('map'); 

    d1.insertAdjacentHTML('afterend', '<div id="two">two</div>');

  //  var wrapper= document.createElement('div');
  //  wrapper.innerHTML= htmlstring;

  //  htmlString.insertBefore("<div>fuck you</div>", ".test-control")

  }

    /* Use the css padding-top to make the container as high as inner content */
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
     [<div id="map" className="map"></div>,
        <div id="test-control">
        <div>sdfggcss padding-top to make the container as high as inner co</div>
        <div>sdfggcss padding-top to make the container as high as inner co</div>
        <div>sdfggcss padding-top to make the container as high as inner co</div>
        <div>sdfggcss padding-top to make the container as high as inner co</div>
      </div>]

    );
  }
}

AuthenticatedPage.propTypes = {
  handleZoomChange: PropTypes.func.isRequired,
  scale: PropTypes.number.isRequired,
};

const mapDispatchToProps = {
  signOut: authActions.signOut,
};

export default connect(null, mapDispatchToProps)(AuthenticatedPage);