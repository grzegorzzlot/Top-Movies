import React from 'react';
import './Tile.scss';

 const Tile = function(props) {
  return (
    <div className='tile' title={props.title}>
      <img src={props.src} alt={props.alt} />
      <div className='film-info'>
        <h3>{props.movieTitle}</h3>
        <h3>{props.showTitle}</h3>
      </div>
      <div className='rating'>
        <span className='vote-value'><span className="fa fa-star checked"></span>{props.voteValue}</span>
        <span className='vote-count'><span className="fa fa-thumbs-o-up like"></span>{props.voteCount}</span>
      </div>
    </div>
  );
}
export default Tile;
