import React, {Component} from 'react';
import {ReactRouter, Link} from 'react-router';
require('./HeaderMessage.css');


export default class HeaderMessage extends Component {

  constructor(props){
    super(props);

  }

  render() {
    return(
      <div className='HeaderMessage_container'>
        <Link to='/'>
          <div className="free_shipping_link">
            <span>FREE SHIPPING</span> OVER $45* & EASY RETURNS
          </div>
        </Link>
      </div>
    );
  }

}
