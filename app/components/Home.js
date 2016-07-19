import React, {Component} from 'react';
import HeroBanner from './HeroBanner';
import HeroBannerMessage from './HeroBannerMessage';
import {ReactRouter, Link} from 'react-router';

export default class Home extends Component {

  constructor(props){
    super(props);

    this.state = {};
  }

  render() {
    return(
      <div className='Home'>
        <HeroBanner />
        <HeroBannerMessage />
      </div>
    );
  }

}
