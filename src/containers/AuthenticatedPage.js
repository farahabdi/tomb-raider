/* eslint-disable */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { authActions } from '../actions';
import PinchView from '../components/PinchView';
import initMap from './initMap'

import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

class AuthenticatedPage extends Component {

  componentWillMount() {
    authActions.initialiseApp();
  }

  componentDidMount() { 
    initMap()

    var x = L.DomUtil.get("map")

    x.insertBefore("<div>fuck you</div>")
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
        <div id="map" className="map">
          <div className="test-control">
              <div>sdfggcss padding-top to make the container as high as inner co</div>
              <div>sdfggcss padding-top to make the container as high as inner co</div>
              <div>sdfggcss padding-top to make the container as high as inner co</div>
              <div>sdfggcss padding-top to make the container as high as inner co</div>
          </div>
        
        </div>
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