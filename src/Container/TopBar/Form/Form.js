import React, { Component } from 'react';
import './Form.scss';

export default class Form extends Component {
  state = {
    status: 'unactive'
  }
  handleClick = ()=>{
    if(this.state.status==='unactive') {
      this.setState({
        status: 'active'
      })
    } else {
      this.setState({
        status: 'unactive'
      })
    }
  }
  handleLocal = (event)=>{
    if (event.keyCode === 13){
      this.setState({
        status: 'unactive'
      })
    }
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit} onKeyUp={this.handleLocal} className={`input-area ${this.state.status}`}>
        <label onClick={this.handleClick} className='search-icon' htmlFor="search-input">
          <i className="fa fa-search" aria-hidden="true"></i>
        </label>
        <div className='input-wrapper'>
          <input
            id="search-input"
            htmlFor="submit"
            type="text"
            placeholder="Search for movies"
            onChange={this.props.handleChange}
          />
        </div>
      </form>
    );
  }
}
