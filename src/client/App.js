import React from 'react';

import Header from './components/Header';

// import './styles/reset.css';
import './App.styles.sass';

class App extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Header />
      </React.Fragment>
    );
  }
}

export default App;
