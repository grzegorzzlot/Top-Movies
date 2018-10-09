import React, {Component} from 'react';
import Form from './Form/Form.js'
import './TopBar.scss';

export default class TopBar extends Component {
  state = {
    class: 'unactive'
  }
  handleHamburger = ()=>{
    this.setState({
      class: 'active'
    });
  }
  handleClose = ()=>{
    this.setState({
      class: 'unactive'
    });
  }
  render(){
    return (
      <div className='top-bar'>
        <span onClick={this.handleHamburger}><i className='hamburger fa fa-bars'></i></span>
        <span className='logo'>Top <span>Movies</span></span>
        <div className={`menu-wrapper ${this.state.class}`}>
          <span className='menu-close' onClick={this.handleClose}><span>✕</span></span>
          <ul className='menu'>
            <p>Movies</p>
            <li onClick={this.handleClose} className="menu-item">
              <ul>
                <li onClick={this.props.handlePopular}>Popular</li>
                <li onClick={this.props.handleTop}>Top Rated</li>
                <li onClick={this.props.handleUpcomming}>Upcomming</li>
              </ul>
            </li>
            <p>TV shows</p>
            <li onClick={this.handleClose} className="menu-item">
              <ul>
                <li onClick={this.props.handleTvPopular}>Popular</li>
                <li onClick={this.props.handleTvTop}>Top Rated</li>
                <li onClick={this.props.handleTvToday}>Tv airing today</li>
              </ul>
            </li>
          </ul>
        </div>
        <Form
          handleSubmit={this.props.handleSubmit} 
          handleChange={this.props.handleChange}
        />
      </div>
    );
  }
}
