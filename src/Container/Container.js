import React, { Component } from 'react';
import axios from 'axios';
import MainContent from './MainContent/MainContent.js';
import TopBar from './TopBar/TopBar.js';
import './Container.scss';

export default class Container extends Component{
  state = {
    isSearchActive: false,
    searchResults: '',
    inputValue: '',
    counter: 1,
    data: [],
    category: "Top Rated movies",
    url: "https://api.themoviedb.org/3/movie/top_rated?api_key=e1e84d1e3059d00d5fab3a4bd17cdbb5&language=en-US&page="
  }

  componentDidMount() {
    this.loadData(this.state.url, this.state.counter);
  }

  //AJAX FUNCTION
  setData(data) {
    this.setState({
      data:data.results,
      searchResults:data.total_results
      });
  }

  //load list data
  loadData(url, param) {
    axios.get(url + param)
      .then(res => {
        this.setData(res.data)
      })
  }
  //load search data
  loadSearch(param) {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=e1e84d1e3059d00d5fab3a4bd17cdbb5&language=en-US&query=${param}`)
      .then(res =>{
        this.setData(res.data)
      })
  }
  //EVENTS HANDLE

  handleClickNext = ()=>{
    this.setState({
      counter: this.state.counter+1
    }, function(){
      this.loadData(this.state.url, this.state.counter);
    })
  }
  handleClickPrev = ()=>{
    if(this.state.counter===1) {
      return false;
    }
    this.setState({
      counter: this.state.counter-1
    }, function(){
      this.loadData(this.state.url, this.state.counter);
    })
  }
  handleMoviesAndShows = (url, category)=>{
    this.setState({
      counter: 1,
      category: category,
      url: url,
      isSearchActive: false
    }, function() {
      this.loadData(this.state.url, this.state.counter);
    })
  }
  handleChange = (event)=>{
    this.setState({
      inputValue: event.target.value
    });
  }
  handleSubmit = (event)=>{
    event.preventDefault();
    console.log(event.target);
    this.setState({
      category: "Search results:",
      counter: 1,
      isSearchActive: true,
    }, function(){
      this.loadSearch(this.state.inputValue)
    })
  }

  render() {
    let content;
    const isSearchActive = this.state.isSearchActive;
    if(!isSearchActive) {
      content = <h1>Category: {this.state.category}</h1>
    } else {
      content = <h1>Search results({this.state.searchResults}):</h1>
    }
    return (
      <div>
        <TopBar
          handleSubmit={this.handleSubmit.bind(this)}
          handleChange={this.handleChange.bind(this)}
          handlePopular={this.handleMoviesAndShows.bind(this, "https://api.themoviedb.org/3/movie/popular?api_key=e1e84d1e3059d00d5fab3a4bd17cdbb5&language=en-US&page=", "Popular movies")}
          handleTop={this.handleMoviesAndShows.bind(this, "https://api.themoviedb.org/3/movie/top_rated?api_key=e1e84d1e3059d00d5fab3a4bd17cdbb5&language=en-US&page=", "Top Rated movies")}
          handleUpcomming={this.handleMoviesAndShows.bind(this, "https://api.themoviedb.org/3/movie/upcoming?api_key=e1e84d1e3059d00d5fab3a4bd17cdbb5&language=en-US&page=", "Upcomming")}
          handleTvPopular={this.handleMoviesAndShows.bind(this, "https://api.themoviedb.org/3/tv/popular?api_key=e1e84d1e3059d00d5fab3a4bd17cdbb5&language=en-US&page=", "Popular TV Shows")}
          handleTvTop={this.handleMoviesAndShows.bind(this, "https://api.themoviedb.org/3/tv/top_rated?api_key=e1e84d1e3059d00d5fab3a4bd17cdbb5&language=en-US&page=", "Top Rated TV Shows")}
          handleTvToday={this.handleMoviesAndShows.bind(this, "https://api.themoviedb.org/3/tv/airing_today?api_key=e1e84d1e3059d00d5fab3a4bd17cdbb5&language=en-US&page=", "TV airing today")}
        />
        <div className='container'>

          <div className='category'>
            {content}
          </div>

          <MainContent
            tileCreate={this.state.data}
            leftHandle={this.handleClickPrev.bind(this)}
            rightHandle={this.handleClickNext.bind(this)}
            strona={this.state.counter}
          />
        </div>
      </div>
    );
  }
}
