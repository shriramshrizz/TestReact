import React from 'react';
import elbrit_logo from './../Assets/elbrit_logo.png'

const Header = () => {
  return (
    <header>
        <img
          src={elbrit_logo}
          alt="Elbrit Logo"
          style={{height: '50px', width: '10px'}}
        />
    </header>
  );
};






export default Header;
