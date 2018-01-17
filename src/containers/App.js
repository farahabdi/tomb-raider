/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAuth } from '../reducers/selectors';
import AuthenticatedPage from './AuthenticatedPage';
import PublicPage from './PublicPage';

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
        scale: 1
    }
    this.handleZoomIn = this.handleZoomIn.bind(this)
    this.handleZoomOut = this.handleZoomOut.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.goToAfrica = this.goToAfrica.bind(this)
  }

  handleZoomIn(value) {
    this.setState({
      scale: this.state.scale+.25
    })
  }

  handleZoomOut(value) {

    /*

        if (this.state.scale <= 1.5) {
      return
    } else {
      this.setState({
        scale: this.state.scale-.25
      })
    }
    */

      this.setState({
        scale: this.state.scale-.25
      })
    
  
  }

  goToAfrica() {
    
  }

  handleReset(value) {
    this.setState({
      scale: 1
    })
  }

  componentWillMount() { }
  render() {
    const { authenticated } = this.props;
    const { scale } = this.state
  
    return (
      <div>
        { }
      { authenticated ? <AuthenticatedPage /> : <PublicPage /> }
      </div>
    );
  }
}
App.propTypes = {
  authenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = getAuth;

export default connect(mapStateToProps, null)(App);
