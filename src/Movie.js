import React from "react";
import "./Movie.css"
import PropTypes from "prop-types";

function Movie({year, title, summary, poster, genres}) {
    return (
        <div className = "movie">            
            <div className = "movie__data">
                <img src={poster} alt={title} title={title}></img>
                <h3 className = "movie__title">{title}</h3>
                <div className = "movie__year">{year}</div>
                <div className = "movie__summary">{summary.slice(0, 180)}...</div>
                <ul className = "movie__genres">
                    {genres.map((genre, index) => {
                        return <li key = {index} className = "movie__genre">{genre}</li>
                    })}
                </ul>
            </div>
        </div>
    );
}

Movie.prototypes = {
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;