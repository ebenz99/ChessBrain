import React, { Component } from 'react';
import './CreateMove.scss';

class CreateMove extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    // this.wasClicked = this.wasClicked.bind(this);
  }

  render() {
    return (
        <div className='newMoveFormContainer'>
            <form id="moveForm">
                <input required type="text" placeholder="Trap Name"/><br/>
                <label for="risk">Risk Level:</label>
                <select id="risk" name="risklist" form="moveForm">
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>=
                </select><br/>
                <label for="reward">Reward Level:</label>
                <select id="reward" name="rewardlist" form="moveForm">
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select><br/>
                <label for="color">Color to Play:</label>
                <select id="color" name="colorlist" form="moveForm">
                    <option value="white">White</option>
                    <option value="black">Black</option>
                </select><br/>
                <input required type="text" placeholder="Piece Initial Position"/><br/>
                <input required type="text" placeholder="Piece Final Position"/><br/>
                <input required type="submit" value="Submit"/>
            </form>
        </div>
    );
  }
}

const submitMove = (form) => {
    // get form.data stored into a variable
    // use axios like getMove.js does, store form.data in the request
    // wait for the api call to finish and return data
    // then take the data, 
}

export default CreateMove;