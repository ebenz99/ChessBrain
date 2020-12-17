import React, { Component } from 'react';
import './CreateMove.scss';
import {BACKEND_ENDPOINT} from "../../constants.js"
import axios from 'axios';

class CreateMove extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.submitMove = this.submitMove.bind(this);
  }

    submitMove = (e) => {
        // prevent refresh on submit
        e.preventDefault();
        // get form.data stored into variable "formData"
        var elements = document.getElementById("moveForm").elements;
        var formData = {};
        for(var i = 0; i < elements.length; i++){
            var item = elements[i];
            formData[item.id] = item.value;
        }
        formData.board = this.props.boardState.toString();

        //use axios like getMove.js does, store form.data in the request
        //posts data to test server
        return axios({method: "post", url: `${BACKEND_ENDPOINT}postmove`,
            data: JSON.stringify(formData),
            headers: { 'Content-Type': 'application/json' }
        })
        .then((response) => {
            console.log(response);
            return response
        }, (error) => {
            return error;
        });
    }

  render() {
    return (
        <div className='newMoveFormContainer'>
            <form id="moveForm" onSubmit={this.submitMove} encType="multipart/form-data">
                <input id="name" required type="text" placeholder="Trap Name"/><br/>
                <label htmlFor="risk">Risk Level:</label>
                <select id="risk" name="risklist" form="moveForm">
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>=
                </select><br/>
                <label htmlFor="reward">Reward Level:</label>
                <select id="reward" name="rewardlist" form="moveForm">
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select><br/>
                <label htmlFor="color">Color to Play:</label>
                <select id="color" name="colorlist" form="moveForm">
                    <option value="white">White</option>
                    <option value="black">Black</option>
                </select><br/>
                <label htmlFor="desc">Description:</label><br/>
                <textarea required id='desc' name="dexc" rows="10" cols="30"></textarea>
                <input required id="pos1" type="text" placeholder="Piece Initial Position"/><br/>
                <input required id="pos2" type="text" placeholder="Piece Final Position"/><br/>
                <input required type="submit" value="Submit"/>
            </form>

            <p>"Board state hash is :" + {this.props.boardState}</p>
        </div>
    );
  }
}

export default CreateMove;
