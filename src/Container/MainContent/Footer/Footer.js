import React, {Component} from 'react';
import './Footer.scss';

export default class Pagination extends Component {
  state = {
    status: 'unactive'
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  handleScroll = ()=>{
    let windowheight = window.outerHeight;
    let scroll = window.scrollY;
    if(scroll>windowheight) {
      this.setState({
        status: 'active'
      })
    } else {
      this.setState({
        status: 'unactive'
      })
    }
  }
  render() {
    return (
      <div className='footer'>
        <div className={`upButton ${this.state.status}`}>
          <a href="#"><i className='fa fa-angle-up'></i></a>
        </div>
        <div className='pagination'>
          <a href='#' onClick={this.props.leftHandle}><i className="fa fa-chevron-left"></i></a>
          <span className='strona'>Page: {this.props.strona}</span>
          <a href='#' onClick={this.props.rightHandle}><i className="fa fa-chevron-right"></i></a>
        </div>
      </div>

    );
  }
}
