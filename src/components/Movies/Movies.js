import Movie from "../Movie/Movie";
import './movies.scss';

const Movies = ({films = []}) => {
    return (
        <div className="movies">
            {films.length ? films.map(film => (<Movie key={film.imdbID} title={film.Title} poster={film.Poster} type={film.Type} year={film.Year} />)) : <h4>Nothing found</h4>}
        </div>
    )
}

export default Movies;