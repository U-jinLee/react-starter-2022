import React from "react";
import PropTypes from "prop-types";

function Movie({year, title, summary, poster}) {
    return (
        <div class="movie">            
            <div class = "movie__data">
                <img src={poster} alt={title} title={title}></img>
                <h3 class = "movie__title">{title}</h3>
                <div class = "movie__year">{year}</div>
                <div class = "movie__summary">{summary}</div>
            </div>
        </div>
    );
}

Movie.prototypes = {
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
};

export default Movie;