import React from 'react';
import './Panel.scss';


 const Panel = function(props) {
  const moviePath = 'http://image.tmdb.org/t/p/w500/';
  return(
    <div className={props.status}>
      <span onClick={props.closeTileHandler} className="panel-tile-close">✕</span>
      <div className='panel-tile'>
        <img src={moviePath+props.backdrop_path}/>
        <div><span>Title: </span>{props.title}{props.name}</div>
        <div><span>For adults: </span>{props.adult}</div>
        <div><span>Original language: </span>{props.original_language}</div>
        <div><span>Original title: </span>{props.original_title}{props.original_name}</div>
        <div><span>Overview: </span>{props.overview}</div>
        <div><span>Popularity: </span>{props.popularity}</div>
        <div><span>Realise date: </span>{props.release_date}</div>
        <div><span>Average vote ratio: </span>{props.vote_average}</div>
        <div><span>Vote count: </span>{props.vote_count}</div>
      </div>
    </div>
  );
}
export default Panel;
