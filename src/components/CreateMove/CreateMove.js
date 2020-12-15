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
            <form>
                <input required type="text"/>Trap Name
                <label for="cars">Choose a car:</label>
                <select id="cars" name="carlist" form="carform">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                </select>
                <input required type="radio"/>Risk Level
                <input required type="radio"/>Reward Level
                <input required type="radio"/>Color to Play
                <input required type="text"/>Piece Initial Position
                <input required type="text"/>Piece Final Position
                <input required type="submit" value="Submit"/>
            </form>
        </div>
    );
  }
}

export default CreateMove;