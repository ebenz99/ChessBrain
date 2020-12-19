import React, { Component } from 'react';
import './InformationPanel.scss';

class InformationPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.printBestMove = this.printBestMove.bind(this);
  }

  printBestMove = () => {
      let items = [];
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
              items.push({ 
                  name: traps[i],
                  risk: risks[i],
                  reward: rewards[i],
                  initialPos: initialPos[i],
                  finalPos: finalPos[i],
                  desc: descs[i],
              });
          }
      }
      return items;
  };

  render(){
    let traps = this.printBestMove();
    let n = traps.length;
    let html = [];
    let arrow = " -> "
    //print each trap with an empty line between
    for (let i = 0; i < n; i++) {
      console.log(traps[i].name);
        html.push(
          <div className='trapBox' key={i+1}>
            <div className='trapBorderExperiment'>
              <div className='trapContent'>
                <h4 className='trapTitle'>{traps[i].name}</h4>
                <div className='trapInfoContainer'> 
                  <p className='trapInfo'>{traps[i].initialPos}{arrow}{traps[i].finalPos}</p>
                  <p className="trapInfo">Risk: {traps[i].risk}, Reward: {traps[i].reward}  </p>
                  <p className="trapInfo">{traps[i].desc}</p>
                </div>
              </div>
            </div>
          </div>
        )
    }
    //end of html
    html.push(<div key = {n+1}></div>);

    return (
            <div className='infoContainer'>
              <div className='infoTitle'>
                <h2>Available Traps</h2>
              </div>
              <div className='infoContentContainer'> 
                {html}
              </div>
            </div>
          );
  }
}

export default InformationPanel
