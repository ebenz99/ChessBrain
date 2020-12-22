import './App.scss';
import Chessboard from './components/Chessboard/Chessboard.js';
import CreateMove from './components/CreateMove/CreateMove.js';
import InformationPanel from './components/InformationPanel/InformationPanel.js'
import StatusBox from './components/StatusBox/StatusBox.js'
import React, { useState, useRef } from 'react';
import ToggleSwitch from './components/Toggle/Toggle';
import { faHistory, faCamera } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add( faHistory, faCamera);


function App() {

  const [positionHash, setHash] = useState(0);
  const [bestMove, setBestMove] = useState(0);
  const [viewOrCreate, setViewOrCreate] = useState(true);
  const [colorToMove, setColorToMove] = useState(0);
  const [whiteOrBlack, setWhiteOrBlack] = useState(true);
  const [status, setStatus] = useState(null);
  const boardReference = useRef();


  return (
    <>
      <StatusBox status={status} setStatus={setStatus}/>
      <div className="App">
        <div className="leftSide" >
        <div className="snapshotButtons">
          <button onClick = {() => {boardReference.current.pasteSnapshot()}}><FontAwesomeIcon icon="history" size = "3x"/></button>
          <button onClick= {() => boardReference.current.copySnapshot()}><FontAwesomeIcon icon="camera" size = "3x"/></button>
        </div>
          < Chessboard ref = {boardReference} setPositionHash={setHash} setBestMove={setBestMove} setColorToMove = {setColorToMove}/>
        </div>
        <div className="rightSide">
          {viewOrCreate===false ? (
          <>
            <div className="formComponentContainer" >
              < CreateMove boardState={positionHash} setStatus={setStatus}/>
            </div>
          </>
          ) : (
          <>
            <div className = "infoComponentContainer">
              <InformationPanel  bestMove={bestMove} colorToMove = {colorToMove} colorSelected = {whiteOrBlack}/>
            </div>
          </>
          )}
          <div className="toggles">
            <div className="toggleRowContainer">
              <p className='toggleLabel'>Mode:</p>
              <div className="toggleContainer">
                <ToggleSwitch id='functionToggle' checked={viewOrCreate} onChange={setViewOrCreate}/>
              </div>
            </div>
            <div className="toggleRowContainer">
              <p className='toggleLabel'>Playing as:</p>
              <div className="toggleContainer">
                <ToggleSwitch id='colorToggle' checked={whiteOrBlack} onChange={setWhiteOrBlack} optionLabels = {['white','black']}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
