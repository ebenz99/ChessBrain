
import _ from 'lodash';

export function squareHasPiece(board, position){
  console.log(position)
  return board[position[0]][position[1]][0];
}

export function whitePawnLegalMove(board, initialPosition, finalPosition) {
  console.log("Initial Position: " + initialPosition+", Final position: "+ finalPosition);
  let result = false;
  let intermediary = [initialPosition[0]-1, initialPosition[1]];

  if (_.isEqual([initialPosition[0]-1, initialPosition[1]], finalPosition)){
    console.log("in correct loop");
    result = squareHasPiece(board, finalPosition) === 2;
  }
  else if (_.isEqual([initialPosition[0]-1, initialPosition[1]+1], finalPosition)){
    result = squareHasPiece(board, finalPosition) === 1;
  }
  else if (_.isEqual([initialPosition[0]-1, initialPosition[1]-1], finalPosition)){
    result = squareHasPiece(board, finalPosition) === 1;
  }
  return result;
}

export function whiteKnightLegalMove(board, initialPosition, finalPosition){
  console.log("inwhiteknightlegalmove");

  let finalPositionIsPossible =
  (_.isEqual([initialPosition[0]-1, initialPosition[1]+2], finalPosition)) ||
  (_.isEqual([initialPosition[0]-1, initialPosition[1]-2], finalPosition)) ||
  (_.isEqual([initialPosition[0]+1, initialPosition[1]+2], finalPosition)) ||
  (_.isEqual([initialPosition[0]+1, initialPosition[1]-2], finalPosition)) ||
  (_.isEqual([initialPosition[0]-2, initialPosition[1]+1], finalPosition)) ||
  (_.isEqual([initialPosition[0]-2, initialPosition[1]-1], finalPosition)) ||
  (_.isEqual([initialPosition[0]+2, initialPosition[1]+1], finalPosition)) ||
  (_.isEqual([initialPosition[0]+2, initialPosition[1]-1], finalPosition));

  console.log(finalPositionIsPossible);

  let result = finalPositionIsPossible && (squareHasPiece(board, finalPosition)!==0);

  return result;
}

export function whiteBishopLegalMove(board, initialPosition, finalPosition){

  let finalPositionIsPossible =
  (finalPosition[0]-initialPosition[0]) === (finalPosition[1]-initialPosition[1]) ||
  (finalPosition[0]-initialPosition[0]) === (-1)*(finalPosition[1]-initialPosition[1]);
  let rDirection = (finalPosition[0]-initialPosition[0])/Math.abs((finalPosition[0]-initialPosition[0]));
  let cDirection = (finalPosition[1]-initialPosition[1])/Math.abs((finalPosition[1]-initialPosition[1]));
  let noBlockingPiece = true;
  for (let i = 1; i<Math.abs(finalPosition[1]-initialPosition[1]); i++){
    if (squareHasPiece(
      board,
      [ initialPosition[0] + i*rDirection , initialPosition[1] + i*cDirection ])
      !== 2) {noBlockingPiece = false;}
  }

  let result = finalPositionIsPossible &&
    squareHasPiece(board,finalPosition)!==0&&
    noBlockingPiece;
  return result;
}

export function whiteRookLegalMove(board, initialPosition, finalPosition){

  let finalPositionIsPossible =
  (finalPosition[0]-initialPosition[0] === 0) ||
  (finalPosition[1]-initialPosition[1] === 0);

  let rDirection = (finalPosition[0]-initialPosition[0])/Math.abs((finalPosition[0]-initialPosition[0]));
  let cDirection = (finalPosition[1]-initialPosition[1])/Math.abs((finalPosition[1]-initialPosition[1]));
  let noBlockingPiece = true;
  for (let i = 1; i<Math.abs(finalPosition[1]-initialPosition[1]); i++){
    if (squareHasPiece(
      board,
      [ initialPosition[0] + i*rDirection , initialPosition[1] + i*cDirection ])
      !== 2) {noBlockingPiece = false;}
  }


  let result = finalPositionIsPossible &&
    squareHasPiece(board,finalPosition)!==0&&
    noBlockingPiece;
  return result;
}
export function legalMove(board, piece, color, initialPosition, finalPosition){
  let result = false;
  if (piece === 1) result = whitePawnLegalMove(board, initialPosition, finalPosition)
  else if (piece === 3) result = whiteKnightLegalMove(board, initialPosition, finalPosition)
  else if (piece === 4) result = whiteBishopLegalMove(board, initialPosition, finalPosition)
  else if (piece === 5) result = whiteRookLegalMove(board, initialPosition, finalPosition)
  else if (piece === 9) {
    result =  whiteRookLegalMove(board, initialPosition, finalPosition) ||
    whiteBishopLegalMove(board, initialPosition, finalPosition);
  }
  return result;
}
