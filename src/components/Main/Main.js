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
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=spider`)
        .then(response => response.json())
        .then(response => this.setState({films: response.Search, loading: false}))
        .catch((err) => {
            console.error(err);
            this.setState({loading: false})
        })
      }

    filterName = (str, type = 'all') => {
        this.setState({loading: true})
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
        .then(response => response.json())
        .then(response => this.setState({films: response.Search, loading: false}))
        .catch((err) => {
            console.error(err);
            this.setState({loading: false})
        })
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