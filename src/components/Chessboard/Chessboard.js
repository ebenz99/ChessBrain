import React, { Component } from 'react';
import Square from '../Square/Square.js'
import './Chessboard.scss';


class Chessboard extends Component {
  constructor(props) {
    super(props);
    ;
  }

  buildBoard = () => {
    const construct8 = (rc, rowNumber) => {
        let squares = [];
        for (let i=0; i < 8; i+=1){
            if (rc === 'r'){
                let cols = construct8('c', i)
                let row = <tr key={i}>{cols}</tr>
                squares.push(row)
            }
            else{
              let color = rowNumber%2===i%2 ? 'whiteSquare' : 'blackSquare'
              squares.push(
                <th key={i} xCord={rowNumber} yCord={i}>
                  <Square color={color}/>
                </th>
              );
            }
        }
        return squares;
    }
    
    return (
        <table className='board'><tbody className='board'>{construct8('r')}</tbody></table>
      );
  }

  render() {
    return (
      this.buildBoard()
    );
  }
}

export default Chessboard;