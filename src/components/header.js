import React from 'react';
import elbrit_logo from './../Assets/elbrit_logo.png'

const Header = () => {
  return (
    <header style={headerStyle}>
        <img
          src={elbrit_logo}
          alt="Elbrit Logo"
          style={{height: '100px'}}
        />
    </header>
  );
};

const headerStyle = {
  padding: '10px'
}




export default Header;
