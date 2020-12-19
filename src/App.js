import './App.scss';
import Chessboard from './components/Chessboard/Chessboard.js';
import CreateMove from './components/CreateMove/CreateMove.js';
import InformationPanel from './components/InformationPanel/InformationPanel.js'
import StatusBox from './components/StatusBox/StatusBox.js'
import React, { useState } from 'react';
import ToggleSwitch from './components/Toggle/Toggle';

function App() {

  const [positionHash, setHash] = useState(0);
  const [bestMove, setBestMove] = useState(0);
  const [viewOrCreate, setViewOrCreate] = useState(true);
  const [colorToMove, setColorToMove] = useState(0);
  const [whiteOrBlack, setWhiteOrBlack] = useState(true);
  const [status, setStatus] = useState(null);

  return (
    <>
      <StatusBox status={status}/>
      <div className="App">
        <div className="leftSide" >
          < Chessboard  setPositionHash={setHash} setBestMove={setBestMove} setColorToMove = {setColorToMove}/>
        </div>
        <div className="rightSide">
        <div className="toggleContainer">
          <ToggleSwitch id='functionToggle2' checked={whiteOrBlack} onChange={setWhiteOrBlack} optionLabels = {['white','black']}/>
        </div>
          {viewOrCreate===false ? (
          <>
            <div className="formComponentContainer" >
              < CreateMove boardState={positionHash}/>
            </div>
          </>
          ) : (
          <>
            <div className = "infoComponentContainer">
              <InformationPanel  bestMove={bestMove} colorToMove = {colorToMove} colorSelected = {whiteOrBlack}/>
            </div>
          </>
          )}
          <div className="toggleContainer">
            <ToggleSwitch id='functionToggle' checked={viewOrCreate} onChange={setViewOrCreate}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
