import React, {Component} from 'react';
require('./HeroBanner.css');


export default class HeroBanner extends Component {

  constructor(props){
    super(props);

    this.state = {};
  }

  render() {
    return(
      <div className='HeroBanner_container'>
        <img src={'../app/img/shipping_info_hero.jpg'}></img>
      </div>
    );
  }

}
