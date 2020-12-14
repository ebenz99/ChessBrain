import React, { Component } from 'react';
import _ from 'lodash';
import Square from '../Square/Square.js';
import { PIECE_MAPPINGS, COLOR_MAPPINGS, BLANK_SQUARE } from '../../constants.js';
import './Chessboard.scss';
import * as helperFunctions from './legalMoveFunctions.js';

class Chessboard extends Component {
  constructor(props) {
    super(props);
    // initial state is resting state of the board, this will change
    // piece positions are encoded as [<color>, <pieceName>] (mappings for these numbers can be found in the src/constants.js file)
    this.state={
      piecePositions:
        [
          [[1,5], [1,3], [1,4], [1,9], [1,10], [1,4], [1,3], [1,5]],
          [[1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1]],
          [[2,2], [2,2], [2,2], [2,2], [2,2], [2,2], [2,2], [2,2]],
          [[2,2], [2,2], [2,2], [2,2], [2,2], [2,2], [2,2], [2,2]],
          [[2,2], [2,2], [2,2], [2,2], [2,2], [2,2], [2,2], [2,2]],
          [[2,2], [2,2], [2,2], [2,2], [2,2], [2,2], [2,2], [2,2]],
          [[0,1], [0,1], [0,1], [0,1], [0,1], [0,1], [0,1], [0,1]],
          [[0,5], [0,3], [0,4], [0,9], [0,10], [0,4], [0,3], [0,5]]
        ],
        initialPosition: null,
        whiteCanCastle: true,
        blackCanCastle: true,
        colorToMove: 0
    }
    // allows setPosition's "this" calls to always refer to the chessboard object
    this.setPosition = this.setPosition.bind(this);
  }

  // marks a position as either initial or final state
  setPosition = (r, c) => {
    // if an initial has already been clicked
    if (this.state.initialPosition) {
      // if the same square clicked twice, just reset the initial position to null
      if(_.isEqual(this.state.initialPosition, [r,c])){
        this.setState({initialPosition: null});
        return
      }
      //otherwise check if this is a legal move
      if (helperFunctions.legalMove(this.state.piecePositions,
        this.state.piecePositions[this.state.initialPosition[0]][this.state.initialPosition[1]][1],
        this.state.piecePositions[this.state.initialPosition[0]][this.state.initialPosition[1]][0],
        this.state.initialPosition, [r,c]) === false){return}
      //otherwise set the new as the final
      let newItem = this.state.piecePositions[this.state.initialPosition[0]][this.state.initialPosition[1]].slice();
      let newBoard = this.state.piecePositions.slice();
      newBoard[r][c] = newItem;
      newBoard[this.state.initialPosition[0]][this.state.initialPosition[1]] = BLANK_SQUARE;
      console.log(newBoard);
      this.setState({initialPosition: null, piecePositions: newBoard})
      console.log(this.hashPosition())
    }
    else {
      // otherwise set this as the initial if it isn't blank
      if(!_.isEqual(this.state.piecePositions[r][c], BLANK_SQUARE)){
        this.setState({initialPosition: [r,c]});
      }
    }
  }

  // this method returns the html for the board (an HTML table element)
  buildBoard = () => {
    // this is a method we use to build the board--it constructs the grid that we'll wrap with <table> elements
    // rc is 'r' if we're building table rows and 'c' for building columns -- this function is recursive, so that flag is necessary
    // rowNumber is an integer we use to track our position in the table when instantiation squares
    const construct8 = (rc, rowNumber) => {
        // when we're in the row section of our recursion, 'squares' contains rows of squares
        // when we're in the column section of our recursion, 'squares' contains a list of squares
        let squares = [];
        for (let i=0; i < 8; i+=1){
            // if we're building a row
            if (rc === 'r'){
                //construct the 8 column elements in that row
                let cols = construct8('c', i)
                //wrap those columns in a <tr> (table row) html element
                let row = <tr key={i}>{cols}</tr>
                //add this row to the list of rows that will make our board
                squares.push(row)
            }
            // if we're building a column
            else {
              // if our row and column idx mod 2 are equal, the square is light, otherwise dark
              let color = rowNumber%2===i%2 ? 'whiteSquare' : 'blackSquare'
              squares.push(((row, col) => {
                let pieceName = null;
                let pieceColor = null;
                // if the piece at the current position is a piece (as opposed to empty)
                if (COLOR_MAPPINGS.hasOwnProperty(this.state.piecePositions[row][col][0])) {
                  pieceColor = COLOR_MAPPINGS[this.state.piecePositions[row][col][0]];
                  pieceName = PIECE_MAPPINGS[this.state.piecePositions[row][col][1]];
                }
                let selected = _.isEqual([row,col], this.state.initialPosition) ? true : false;
                // returns a square wrapped in <th> elements
                return  <th className="squareContainer" key={i} >
                          <Square selected={selected} rowCord={rowNumber} colCord={i} color={color} pieceColor={pieceColor} pieceName={pieceName} setPosition={this.setPosition}/>
                        </th>
                })(rowNumber, i) //calls the function to return the square we just created into the array
              );
            }
        }
        return squares;
    }
    // buildBoard returns this HTML--table element wrappers around the matrix of squares created by construct8('r')
    return (
        <table className='board'><tbody className='board'>{construct8('r')}</tbody></table>
      );
  }

  hashCode = function(s) {
    var hash = 0;
    if (s.length == 0) {
        return hash;
    }
    for (var i = 0; i < s.length; i++) {
        var char = s.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}
  hashPosition(){
    let stateString = this.state.piecePositions.toString()+
    this.state.whiteCanCastle.toString()+
    this.state.blackCanCastle.toString()+
    this.state.colorToMove.toString();
    return this.hashCode(stateString);
  }

  // rendering the chessboard means displaying the result HTML from buildBoard()
  render() {
    return (
      this.buildBoard()
    );
  }
}

export default Chessboard;
