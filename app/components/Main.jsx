import React, {Component} from 'react';
import HeaderContainer from '../containers/HeaderContainer';

export default class Main extends Component {

  constructor(props){
    super(props);

    // this.state = {};
  }

  render() {
    return(
      <div className='main-component'>
        <HeaderContainer />
        {this.props.children}
      </div>
    );
  }

}
