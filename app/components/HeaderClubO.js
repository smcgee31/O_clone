import React, {Component} from 'react';
import {ReactRouter, Link} from 'react-router';

require('./HeaderClubO.css');

export default class HeaderClubO extends Component {

  constructor(props){
    super(props);

    this.state = {};
  }

  render() {
    return(
      <div className='HeaderClubO'>
        <Link to='/club_O_Rewards'>
          <span className="club-O_title">Get Paid to Shop</span><br />
          <span className="club-O_link">Start Earning <i className="fa fa-caret-right" aria-hidden="true"></i></span>
        </Link>
      </div>
    );
  }

}
