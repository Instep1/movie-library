import React from "react";
import Movies from "../Movies/Movies";
import Preloader from "../Preloader/Preloader";
import Search from "../Search/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
    state = {
        films: [],
        loading: true
      }
    
      componentDidMount() {
        fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=iron`)
        .then(response => response.json())
        .then(response => this.setState({films: response.Search, loading: false}))
      }

    filterName = (str, type = 'all') => {
        this.setState({loading: true})
        fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
        .then(response => response.json())
        .then(response => this.setState({films: response.Search, loading: false}))
    }

    render() {
        const {films, loading} = this.state
        return (
            <main className="container content">
                <Search filterName={this.filterName}/>
                {
                    loading ? <Preloader/> : (<Movies films={films}/>)
                }
            </main>
        )
    } 
}

export default Main;