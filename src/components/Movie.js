import React from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";


export default function Movie({id, title, coverImg, summary, genres}) {
  return (
    <div>
        <h2>
          <Link to ={`/movie/${id}`}>▼ {title}</Link>
          
        </h2>
        <img src={String(coverImg)} />
        <p>{summary}</p>
        <ul>
            {genres.map(g => (<li key = {g} >{g}</li>))}
        </ul>
    </div>
  )
}


Movie.propTypes={
    id : PropTypes.number.isRequired,
    coverImg : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired
};