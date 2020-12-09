import React, { Component } from 'react';
import './Piece.scss'

class Piece extends Component {
  constructor(props) {
    super(props);
    ;
  }

  render() {
    const pieceName = `/${this.props.color}${this.props.piece}.png`
    return (
        <img src={pieceName} alt="image" />
    );
  }
}

export default Piece;