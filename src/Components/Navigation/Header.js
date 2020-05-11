import React from 'react';

import './Header.css';
import NavLinks from './NavLinks';

function Header(props)  {
  return <header className="main-header">
  <h1>The Guest Book</h1>
  <NavLinks />
  </header>;
};

export default Header;