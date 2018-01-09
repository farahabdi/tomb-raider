import React from 'react';
import Button from './Button';

const Header = ({authenticated, signOut}) => (
  <header >
    <div>
      <div>
        <h1>Facebook Firebase Integration</h1>
        <ul>
          {authenticated ? <li><Button onClick={signOut}>Sign out</Button></li> : null}
        </ul>
      </div>
    </div>
  </header>
);

export default Header;
