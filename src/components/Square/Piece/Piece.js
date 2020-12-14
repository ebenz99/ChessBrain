import React, { Component } from 'react';
import './Piece.scss'

class Piece extends Component {
  constructor(props) {
    super(props);
    ;
  }

  render() {
    // because the image is in the public folder, we can access it like this
    const pieceName = `/pieces/${this.props.color}${this.props.piece}.png`;
    return (
        <img className="piece" src={pieceName} alt="chess piece" />
    );
  }
}

export default Piece;
