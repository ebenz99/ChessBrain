import './App.scss';
import Chessboard from './components/Chessboard/Chessboard.js';
import CreateMove from './components/CreateMove/CreateMove.js';
import InformationPanel from './components/InformationPanel/InformationPanel.js'
import React, { useState } from 'react';

function App() {

  const [positionHash, setHash] = useState(0);
  const [bestMove, setBestMove] = useState(0);
  return (
    <div className="App">
      <div className="boardComponentContainer" >
        < Chessboard  callbackFunction = {setHash} setBestMove = {setBestMove} />
      </div>
      <div className="formComponentContainer" >
        < CreateMove boardState = {positionHash}/>
      </div>
      <div className = "infoComponentContainer">
        <InformationPanel  bestMove = {bestMove}/>
      </div>
    </div>
  );
}

export default App;
