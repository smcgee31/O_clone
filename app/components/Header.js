import React, {Component} from 'react';
import HeaderMessage from './HeaderMessage';
import HeaderClubO from './HeaderClubO';
import NavLinksBar from './NavLinksBar';
require('./Header.css');

export default class Header extends Component {

  constructor(props){
    super(props);

    this.state = {};
  }

  render() {
    return(
      <div className='header_container'>
        <HeaderMessage />
        <div className="header_middle_area">
          <div className='header_logo'>
            <img src={'./app/img/header_logo.png'} />
          </div>
          <div className="header_searchbar">
            <input className="searchInput" type="text" placeholder="Search" onChange={ (event) => this.searchInput(event.target.value)} />
            <button className="search_btn" type="button">
            <i className="fa fa-search fa-lg fa-inverse" aria-hidden="true"></i>
            </button>
          </div>
          <HeaderClubO />
        </div>
        <NavLinksBar />
      </div>
    );
  }


}
