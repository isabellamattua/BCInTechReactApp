import React, { Component } from 'react';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import Main from './components/main/Main';

const appStyles = {
  display: 'grid',
  gridTemplateRows: 'min-content auto min-content'
}

class App extends Component {
  constructor(props) {
    super(props);

    //Declare a global state
    //Values that can be manipulated and passed between components 
  }

  render() {
    return (
        <div style={appStyles}>
          <Header />
          <Main />
          <Footer />
        </div>
    );
  }
}

export default App;
