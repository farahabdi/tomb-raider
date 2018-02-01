/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAuth } from '../reducers/selectors';
import AuthenticatedPage from './AuthenticatedPage';
import PublicPage from './PublicPage';

class App extends Component {
  render() {
    const { authenticated } = this.props;
    return (
      <div>
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
