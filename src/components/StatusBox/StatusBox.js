import React, { Component } from 'react';
import './StatusBox.scss';

export class StatusBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: this.props.status
    }
    this.disappear = this.disappear.bind(this);
  }

  disappear = () => {
    if (this.state.status) {
      setTimeout((() => {
        this.setState({status: null});
      }), 3000)
    }
  }

  render() {
    this.disappear();
    let statusBoxID = 'noStatusBox';
    let titleID = 'successTitle';
    let textID = 'successText';
    if (this.state.status){
      if (this.state.status === 'good'){
        statusBoxID = 'successBox';
      }
      else {
        statusBoxID = 'failBox';
        titleID = 'failTitle';
        textID = 'failText';
      }
    }
    return (
      <div className='box' id={statusBoxID}>
        <div className="statusBoxInner">
          <p className="title" id={titleID}>StatusBox</p>
          <p className="text" id={textID}>{this.props.statusBox}</p>
        </div>
      </div>
    );
  }
}

export default StatusBox;