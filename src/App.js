import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';

class App extends React.Component {
  state = {
    films: [],
    loading: false
  }

  componentDidMount() {
    fetch('http://www.omdbapi.com/?i=tt3896198&apikey=e05b85e0&s=iron')
    .then(response => response.json())
    .then(response => this.setState({films: response.Search}))
  }

  render() {
    return (
      <>
        <Header/>
        {this.state.films.length ? 
        <Main films={this.state.films}/> :
        <h3>Loading data...</h3> 
        }
        <Footer/>
      </>
    );
  }
}

export default App;
