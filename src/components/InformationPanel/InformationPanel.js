import React, { Component } from 'react';
import './InformationPanel.scss';

class InformationPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.printBestMove = this.printBestMove.bind(this);
  }

  printBestMove = () => {
      let printStatement = [];
      //get data from props
      if(this.props.bestMove.data) {
          let n = this.props.bestMove.data.length;
          let traps = [];
          let risks = [];
          let rewards = [];
          let initialPos = [];
          let finalPos = [];
          let descs = [];
          //organize lists of attributes
          for (let i = 0; i < n; i++) {
              traps.push(this.props.bestMove.data[i].trap.S);
              risks.push(this.props.bestMove.data[i].risk.S);
              rewards.push(this.props.bestMove.data[i].reward.S);
              initialPos.push(this.props.bestMove.data[i].initialPosition.S);
              finalPos.push(this.props.bestMove.data[i].finalPosition.S);
              descs.push(this.props.bestMove.data[i].desc.S);
          }
          //print each trap from list of attributes
          for (let i = 0; i < n; i++) {
              printStatement.push(traps[i]+" ("+
                               risks[i]+" risk, "+
                               rewards[i]+" reward): "+
                               initialPos[i]+" -> "+
                               finalPos[i],
                               descs[i]);
          }
      }
      return printStatement;
  };

  render(){
    
    let printStatement = this.printBestMove();
    let n = printStatement.length;
    let html = [];
    //begin html
    html.push(<div key = {0}>
              <p> It aint much, but its honest work </p>
              </div>)
    //print each trap with an empty line between
    for (let i = 0; i < n; i++) {
        html.push(<div key = {i+1}><p>{printStatement[i]}</p></div>)
    }
    //end of html
    html.push(<div key = {n+1}></div>)

    return html;


  }
}

export default InformationPanel
