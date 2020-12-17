import React, { Component } from 'react';
import './InformationPanel.scss';

class InformationPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render(){
    console.log(this.props.bestMove);
    return(
      <div>
      <p> It aint much, but its honest work </p>
      <p> the best move is {this.props.bestMove}</p>
      </div>
    );
  }
}

export default InformationPanel
