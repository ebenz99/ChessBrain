import React, { Component } from 'react';
import Square from '../Square/Square.js';
import { PIECE_MAPPINGS, COLOR_MAPPINGS } from '../../constants.js';
import './Chessboard.scss';

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
        ]
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
                // returns a square wrapped in <th> elements
                return  <th className="squareContainer" key={i} >
                          <Square xCord={rowNumber} yCord={i} color={color} pieceColor={pieceColor} pieceName={pieceName}/>
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

  // rendering the chessboard means displaying the result HTML from buildBoard()
  render() {
    return (
      this.buildBoard()
    );
  }
}

export default Chessboard;
