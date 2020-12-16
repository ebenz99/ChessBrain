import './App.scss';
import Chessboard from './components/Chessboard/Chessboard.js';
import CreateMove from './components/CreateMove/CreateMove.js';
import React, { useState } from 'react';

function App() {

  const [positionHash, setHash] = useState(0);
  return (
    <div className="App">
      <div className="boardComponentContainer" >
        < Chessboard  callbackFunction = {setHash} />
      </div>
      <div className="formComponentContainer" >
        < CreateMove boardState = {positionHash}/>
      </div>
      <p>"hashcode: " + {positionHash}</p>
    </div>
  );
}

export default App;
