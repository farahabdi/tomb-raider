/* eslint-disable */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { authActions } from '../actions';
import PinchView from '../components/PinchView';
import map from '../assets/map.jpg';

class AuthenticatedPage extends Component {
  componentWillMount() {
    authActions.initialiseApp();
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
      <PinchView
        scale={scale}
        zoomChange={handleZoomChange}
        debug
        maxScale={4}
      >
        <img className="map" src={map} style={{
          margin: 'auto',
          width: '100%',
          height: 'auto'
        }} />
      </PinchView>
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
