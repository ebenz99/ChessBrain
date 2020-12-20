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
    if (this.props.status !== null) {
      setTimeout(() => {
        this.props.setStatus(null);
      }, 2500)
    }
  }

  render() {
    this.disappear();
    let statusBoxID = 'noStatusBox';
    let titleID = 'successTitle';
    let textID = 'successText';
    let title = 'Success';
    let text = 'Posted trap!'
    if (this.props.status){
      if (this.props.status === 'good'){
        statusBoxID = 'successBox';
      }
      else {
        statusBoxID = 'failBox';
        titleID = 'failTitle';
        textID = 'failText';
        title = 'Error';
        text = 'Trap not posted'
      }
    }
    return (
      <div className='box' id={statusBoxID}>
        <div className="statusBoxInner">
          <p className="title" id={titleID}>{title}</p>
          <p className="text" id={textID}>{text}</p>
        </div>
      </div>
    );
  }
}

export default StatusBox;