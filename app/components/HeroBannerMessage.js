import React, {Component} from 'react';
require('./HeroBannerMessage.css');


export default class HeroBannerMessage extends Component {

  constructor(props){
    super(props);

    this.state = {};
  }

  render() {
    return(
      <div className='HeroBannerMessage_container'>
        <div className="HeroBannerMessage">
          Orders over $45 ship for free*
        </div>
        <button className="shopButton" type="button">Shop Now</button>
        <div className="promoTerms">
          Promotion Terms* >
        </div>
      </div>
    );
  }

}
