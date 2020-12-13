import React, { Component } from 'react';
import Piece from './Piece/Piece.js';
import './Square.scss';

class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pieceColor: this.props.pieceColor,
      pieceName: this.props.pieceName
    }
    this.wasClicked = this.wasClicked.bind(this);
  }

  render() {
    let piece = null;
    // if there's a piece at this square, create it
    if ((this.state.pieceName) && (this.state.pieceColor)) {
      piece = <Piece color={this.state.pieceColor} piece={this.state.pieceName} />
    }
    // the square we render is a colored div with an Piece object in the center
    return (
      //button?
      <button className={this.props.color} onClick = {this.wasClicked}>
        {piece}
      </button>
    );
  }
  wasClicked(){
    this.props.setPosition(this.props.xCord,this.props.yCord);
  }
}

export default Square;
