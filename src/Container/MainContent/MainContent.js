import React, { Component } from 'react';
import Tile from './Tile/Tile.js';
import Footer from './Footer/Footer.js';
import Panel from './Panel/Panel.js';

export default class MainContent extends Component {

  state = {
    status: 'panel unactive',
    data: {
      adult: "",
      backdrop_path: "",
      original_language: "",
      original_title: "",
      overview: "",
      popularity: "",
      release_date: "",
      title: "",
      vote_average: "",
      vote_count: ""
    }
  }

  tileHandler(index, event) {
    this.setState({
      status: 'panel active',
      data: this.props.tileCreate[index]
    });
  }

  closeTileHandler() {
    this.setState({
      status: 'panel unactive'
    })
  }

  render() {
    return (
      <div className='main-content'>
        <Panel
          closeTileHandler={this.closeTileHandler.bind(this)}
          status={this.state.status}
          adult={this.state.data.adult}
          backdrop_path={this.state.data.backdrop_path}
          original_language={this.state.data.original_language}
          original_title={this.state.data.original_title}
          original_name={this.state.data.original_name}
          overview={this.state.data.overview}
          popularity={this.state.data.popularity}
          release_date={this.state.data.release_date}
          title={this.state.data.title}
          name={this.state.data.name}
          vote_average={this.state.data.vote_average}
          vote_count={this.state.data.vote_count}
        />

        {this.props.tileCreate.map((i, index)=>
          <div className='tile-wrapper' key={index} onClick={this.tileHandler.bind(this, index)}>
            <Tile key={index}
              src={`http://image.tmdb.org/t/p/w500/${i.poster_path}`}
              alt={i.title} title={i.title}
              movieTitle={i.title}
              showTitle={i.name}
              voteValue={i.vote_average}
              voteCount={i.vote_count}
            />
          </div>

        )}

        <Footer
          leftHandle={this.props.leftHandle}
          rightHandle={this.props.rightHandle}
          strona={this.props.strona}
        />

      </div>
    );
  }
}
