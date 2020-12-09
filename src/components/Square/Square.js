import React, { Component } from 'react';
import { PIECE_MAPPINGS, COLOR_MAPPINGS} from '../../constants.js'
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