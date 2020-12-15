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
                <input required type="text" placeholder="Trap Name"/>
                <label for="cars">Choose a car:</label>
                <select id="cars" name="carlist" form="carform">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                </select>
                <label for="risk">Risk Level:</label>
                <select id="risk" name="risklist" form="moveForm">
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>=
                </select>
                <label for="reward">Reward Level:</label>
                <select id="reward" name="rewardlist" form="moveForm">
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>=
                </select>
                <input required type="radio" placeholder="Reward Level"/>
                <input required type="radio" placeholder="Color to Play"/>
                <input required type="text" placeholder="Piece Initial Position"/>
                <input required type="text" placeholder="Piece Final Position"/>
                <input required type="submit" value="Submit"/>
            </form>
        </div>
    );
  }
}

export default CreateMove;