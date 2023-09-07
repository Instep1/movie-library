import './movie.scss';

const Movie = ({title, poster, type, year}) => {
    return (
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    {
                        poster === 'N/A' ? 
                        <img className="activator" src='https://placehold.co/300x550/EEE/31343C?font=playfair-display&text=No%20poster%20for%20this%20film' alt="image_film"/> : 
                        <img className="activator" src={poster} alt="image_film"/>
                    }
                </div>
                <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{title}</span>
                <div className="card__info">
                <p>{year}</p>
                <p>{type.charAt(0).toUpperCase() + type.slice(1)}</p>
                </div>
                </div>
            </div>
    )
}

export default Movie;