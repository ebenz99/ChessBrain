import React, { Component } from 'react';
import Piece from './Piece/Piece.js';
import './Square.scss';

class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.wasClicked = this.wasClicked.bind(this);
  }

  render() {
    let piece = null;
    // if there's a piece at this square, create it
    if ((this.props.pieceName) && (this.props.pieceColor)) {
      piece = <Piece color={this.props.pieceColor} piece={this.props.pieceName} />
    }
    // the square we render is a colored div with an Piece object in the center
    return (
      <button className={this.props.color} onClick = {this.wasClicked}>
        {piece}
      </button>
    );
  }
  wasClicked(){
    this.props.setPosition(this.props.rowCord,this.props.colCord);
  }
}

export default Square;
