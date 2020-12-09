import React, { Component } from 'react';
import './Square.scss'

class Square extends Component {
  constructor(props) {
    super(props);
    ;
  }

  render() {
    return (
      <div className={this.props.color}></div>
    );
  }
}

export default Square;