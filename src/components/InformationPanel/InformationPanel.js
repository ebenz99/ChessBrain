import React, { Component } from 'react';
import './InformationPanel.scss';

class InformationPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render(){
    return(
      <div>
      <p> It aint much, but its honest work </p>
      <p>{JSON.stringify(this.props.bestMove.data)}</p>
      <p> the best moves are {}</p>
      </div>
    );
  }
}

export default InformationPanel
