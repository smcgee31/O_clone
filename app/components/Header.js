import React, {Component} from 'react';
import NavLinksBar from './NavLinksBar';
require('../main.css');

export default class Header extends Component {

  constructor(props){
    super(props);

    this.state = {};
  }

  render() {
    return(
      <div className='header_container'>
        <div className="free_shipping_link">
          <span>FREE SHIPPING</span> OVER $45* & EASY RETURNS
        </div>
        <div className="header_middle_area">
          <div className='header_logo'>
            <img src={'./app/img/header_logo.png'} />
          </div>
          <div className="header_searchbar">
            <input className="searchbar" type="text" placeholder="Search" onChange={ (event) => this.searchbar(event.target.value)} />
            <button className="search_btn fa" type="button">
            <i className="fa fa-search fa-inverse"></i>
            </button>
          </div>
        </div>
        <NavLinksBar />
      </div>
    );
  }


}
