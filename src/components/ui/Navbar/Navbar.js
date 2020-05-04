import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.scss';

const Navbar = props => {

  const {
    theme
  } = props;

  return (
    <nav className={`gu-navbar gu-navbar-${theme}`}>
      <h3 className='gu-navheader'>GlobeGlance</h3>
    </nav>
  )
}

Navbar.propTypes = {
  theme: PropTypes.string 
}

Navbar.defaultProps = {
  theme: 'light'
}

export default Navbar;
