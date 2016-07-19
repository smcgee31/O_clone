// import React from 'react';
//
// const Main = React.createClass ({
//   render: function() {
//     return (
//       <div className=''>
//         {/*<Header />*/}
//         {this.props.children}
//         {/*<Footer />*/}
//       </div>
//     )
//   }
// });
//
// module.exports = Main;

import React, {Component} from 'react';
import Header from './Header';

export default class Main extends Component {

  constructor(props){
    super(props);

    // this.state = {};
  }

  render() {
    return(
      <div className='main-component'>
        <Header />
        some stuff from MAIN
        {this.props.children}
      </div>
    );
  }

}
