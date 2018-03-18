import React, {Component} from 'react';
require('./NavLinksBar.css');


export default class NavLinksBar extends Component {

  constructor(props){
    super(props);

    this.state = {};
  }

  render() {
    return(
      <div className='NavLinksBar'>
        <span>For the Home</span>
        <span>Furniture</span>
        <span>Bed & Bath</span>
        <span>Women</span>
        <span>Men</span>
        <span>Jewelry</span>
        <span>Watches</span>
        <span>Health & Beauty</span>
        <span>Electronics</span>
        <span>Worldstock</span>
        <span>More</span>
        <span className='sale'>Sale</span>
        {/*use flexbox? for spacing*/}
      </div>
    );
  }

}
