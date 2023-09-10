import React, { useState, useEffect } from "react";
import Movies from "../Movies/Movies";
import Preloader from "../Preloader/Preloader";
import Search from "../Search/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

const Main = () => {

    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=spider`)
        .then(response => response.json())
        .then(response => {
            setFilms(response.Search);
            setLoading(false);
        })
        .catch((err) => {
            console.error(err);
            setLoading(false);
        })
    }, [])


    const filterName = (str, type = 'all') => {
        setLoading(true);
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
        .then(response => response.json())
        .then(response => {
            setFilms(response.Search);
            setLoading(false);
        })
        .catch((err) => {
            console.error(err);
            setLoading(false);
        })
    }

        return (
            <main className="container content">
                <Search filterName={filterName}/>
                {
                    loading ? <Preloader/> : (<Movies films={films}/>)
                }
            </main>
        )
}

export default Main;