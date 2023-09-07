import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';

class App extends React.Component {
  render() {
    return (
      <>
        <Header/>
        <Main />
        <Footer/>
      </>
    );
  }
}

export default App;
