import './App.scss';
import Chessboard from './components/Chessboard/Chessboard.js';
import CreateMove from './components/CreateMove/CreateMove.js';
import InformationPanel from './components/InformationPanel/InformationPanel.js'
import React, { useState } from 'react';
import ToggleSwitch from './components/Toggle/Toggle';

function App() {

  const [positionHash, setHash] = useState(0);
  const [bestMove, setBestMove] = useState(0);
  const [viewOrCreate, setViewOrCreate] = useState(true);

  return (
    <div className="App">
      <div className="leftSide" >
        < Chessboard  setPositionHash={setHash} setBestMove={setBestMove} />
      </div>
      <div className="rightSide">
        {viewOrCreate===false ? (
        <> 
          <div className="formComponentContainer" >
            < CreateMove boardState={positionHash}/>
          </div>
        </>
        ) : (
        <> 
          <div className = "infoComponentContainer">
            <InformationPanel  bestMove={bestMove}/>
          </div>
        </>
        )}
        <div className="toggleContainer">
          <ToggleSwitch id='functionToggle' checked={viewOrCreate} onChange={setViewOrCreate}/>
        </div>
      </div>
    </div>
  );
}

export default App;
