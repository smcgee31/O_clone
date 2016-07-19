import React, {Component} from 'react';
require('./Club_O_Rewards.css');

export default class Club_O_Rewards extends Component {

  constructor(props){
    super(props);

    this.state = {};
  }

  render() {
    return(
      <div className='club_O_rewards'>
        <h1>Congratulations, you've made it to the Club-O Rewards page!</h1>
      </div>
    );
  }

}
