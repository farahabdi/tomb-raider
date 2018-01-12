import React from 'react';
import { connect } from 'react-redux';
import { getAuth } from '../reducers/selectors';
import { AuthenticatedPage } from './AuthenticatedPage';
import { PublicPage } from './PublicPage';

const App = () => {
  const { authenticated } = this.props;
  return (
    <main>
      {authenticated ? (
        <AuthenticatedPage />
          ) : (
            <PublicPage />
        )}
    </main>
  );
};


const mapStateToProps = getAuth;

export default connect(mapStateToProps, null)(App);
