import React, { Component } from 'react';
import _ from 'lodash';
import Square from '../Square/Square.js';
import { PIECE_MAPPINGS, COLOR_MAPPINGS, BLANK_SQUARE } from '../../constants.js';
import getMove from '../../utilities/getMove.js'
import './Chessboard.scss';
import { legalMoveFinal } from './legalMoveFunctions.js';
import { boardStateChange } from './augmentBoardFunctions.js';

class Chessboard extends Component {
  constructor(props) {
    super(props);
    // initial state is resting state of the board, this will change
    // piece positions are encoded as [<color>, <pieceName>] (mappings for these numbers can be found in the src/constants.js file)

    this.state={

      // the state that the chessboard will return to when we reset
      // be default we want it to be the starting board.
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
        // [if W can castle, if B can castle, who's turn, can a pawn be taken en passant]
        auxBoardState: [true,true,0,null],
        //if white can castle kingside, if white can castle queenside,
        //if black can castle kinside, if black can castle queenside
        castling: [true, true, true, true],
        initialPosition: null
    }
    // allows setPosition's "this" calls to always refer to the chessboard object
    this.setPosition = this.setPosition.bind(this);
    this.hashPosition = this.hashPosition.bind(this);
    // Give the rest of the app information on the initial Position;
    let stateString = this.state.piecePositions.toString()+'|'+
    this.state.auxBoardState.toString();
    let result = this.hashCode(stateString);
    this.props.setPositionHash(result);
  }

  // marks a position as either initial or final state
  setPosition = (r, c) => {
    // if an initial has already been clicked
    if (this.state.initialPosition) {
      // if the same square clicked twice, just reset the initial position to null
      if(_.isEqual(this.state.initialPosition, [r,c])){
        this.setState({initialPosition: null});
        return;
      }
      //otherwise check if this is a legal move
      let stateCopy = _.cloneDeep(this.state);
      if (legalMoveFinal(stateCopy.piecePositions,
        stateCopy.piecePositions[stateCopy.initialPosition[0]][stateCopy.initialPosition[1]][1],
        stateCopy.piecePositions[stateCopy.initialPosition[0]][stateCopy.initialPosition[1]][0],
        stateCopy.initialPosition, [r,c], stateCopy.auxBoardState, stateCopy.castling) === false){return;}

      //otherwise make the move
      let newBoard = boardStateChange(this.state.piecePositions,
                                    this.state.initialPosition,
                                    [r,c], this.state.auxBoardState, this.state.castling);

      // Create new En Passant, colorToMove value, and castling values

      this.setState({initialPosition: null, piecePositions: newBoard[0], auxBoardState: newBoard[1], castling: newBoard[2]});
      ///what is this magic below
      getMove(this.hashPosition(newBoard[0], newBoard[1], newBoard[2])).then((response) => {
        this.props.setBestMove(response);
      });
      //isWhiteKingInCheck(this.state.piecePositions, this.state.auxBoardState);
      //isBlackKingInCheck(this.state.piecePositions, this.state.auxBoardState);
    }
    else {
      if (this.state.piecePositions[r][c][0] !== this.state.auxBoardState[2]){
        return;
      }
      else {
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
    if (s.length === 0) {
        return hash;
    }
    for (var i = 0; i < s.length; i++) {
        var char = s.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}
  hashPosition(board, aux, castling){
    let stateString = board.toString()+'|'+
    aux.toString() + '|' + castling.toString();
    let result = this.hashCode(stateString);
    this.props.setPositionHash(result);
    this.props.setColorToMove(aux[2]);
    return result;
  }

takeSnapshot(){
    let result = {
      piecePositions: _.cloneDeep(this.state.piecePositions),
      auxBoardState: _.cloneDeep(this.state.auxBoardState),
      castling: _.cloneDeep(this.state.castling)
    };
    return result;
  }

copySnapshot (){
  let result = this.takeSnapshot();
  this.props.setDefaultBoard(result);
}

pasteSnapshot (){
    let argumentArrayClone = _.cloneDeep(this.props.defaultBoard);
    this.setState(
      {
        piecePositions: argumentArrayClone.piecePositions,
        auxBoardState: argumentArrayClone.auxBoardState,
        castling: argumentArrayClone.castling
      }
    );
    console.log(argumentArrayClone);
    getMove(this.hashPosition(argumentArrayClone.piecePositions,
       argumentArrayClone.auxBoardState,
        argumentArrayClone.castling)).then((response) => {
      this.props.setBestMove(response);
    });
  }
  addToBoardLibrary(name){
    let snapshot = this.takeSnapshot();
    let boardStateLibrary = _.cloneDeep(this.props.boardStateLibrary);
    let result = boardStateLibrary.set(name, snapshot);
    this.props.setBoardStateLibrary(result);
  }

  // rendering the chessboard means displaying the result HTML from buildBoard()
  render() {
    return (
      this.buildBoard()
    );
  }
}



export default Chessboard;
