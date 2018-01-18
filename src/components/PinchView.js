/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from 'react-prefixr';
import PinchZoomPan from './PinchZoomPan';

class PinchView extends Component {

  getContainerStyle () {
    const {backgroundColor, containerRatio} = this.props
    return {
      paddingTop: '224%',
      overflow: 'hidden',
      position: 'relative',
      background: backgroundColor
    }
  }

  getContentStyle(obj) {
    return {
  
      align: 'center',
      display: 'flex',
      alignItems: 'center',
      transform: `scale(${obj.scale}) translateY(${obj.y}px)translateX(${obj.x}px)`,
      position: 'fixed',
    };
  }

  renderDebug(obj) {
    return (
      <div style={{
        position: 'absolute', bottom: 0, left: 0, background: '#555', color: '#fff', padding: '3px 6px',
    }}>
        Scale: {obj.scale}, X: {obj.x}, Y: {obj.y}
      </div>
    );
  }

  render() {
    const {
      debug, initialScale, maxScale,
      children, onPinchStart, onPinchStop, scale,
    } = this.props;
    return (
      <PinchZoomPan
        scale={scale}
        initialScale={initialScale}
        maxScale={maxScale}
        // eslint-disable-next-line
        render={(obj) => {
        return (
          <div className="map__holder">
            <div style={this.getContainerStyle()}>
              <div className="map__inner">
                <div style={s(this.getContentStyle(obj))}>
                  {children}
                </div>
              </div>
            </div>
            {debug && this.renderDebug(obj)}
          </div>
        );
      }}
        onPinchStart={onPinchStart}
        onPinchStop={onPinchStop}
      />
    );
  }
}

PinchView.defaultProps = {
  initialScale: 1,
  maxScale: 2,
  containerRatio: 100,
  debug: true,
  scale: 1,
};

PinchView.propTypes = {
  initialScale: PropTypes.number,
  maxScale: PropTypes.number,
  children: PropTypes.element.isRequired,
  debug: PropTypes.bool,
  onPinchStart: PropTypes.func.isRequired,
  onPinchStop: PropTypes.func.isRequired,
  scale: PropTypes.number,
};

export default PinchView;
