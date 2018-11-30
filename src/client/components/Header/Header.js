import React from 'react';

import './Header.styles.sass';

class Header extends React.PureComponent {
  render() {
    return (
      <header className='main-header'>
        <h1>ricardoaandres<span className='cursor'>_</span></h1>
        <h6>CODE, KITTENS AND LEMON PIE</h6>
      </header>
    );
  }
}

export default Header;
