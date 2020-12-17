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
            return response
        }, (error) => {
            return error;
        });
    }

  render() {
    return (
        <form className="moveForm" onSubmit={this.submitMove} encType="multipart/form-data">
            <div className="moveFormDiv">
                <div className='inputDiv'>
                    <label htmlFor="risk">Trap Name:</label>
                    <input id="name" required type="text" placeholder="Trap Name"/><br/>
                </div>
                <div className='inputDiv'>
                    <label htmlFor="risk">Risk Level:</label>
                    <select id="risk" name="risklist" form="moveForm">
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>=
                    </select><br/>
                </div>
                <div className='inputDiv'>
                    <label htmlFor="reward">Reward Level:</label>
                    <select id="reward" name="rewardlist" form="moveForm">
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select><br/>
                </div>
                <div className='inputDiv'>
                    <label htmlFor="color">Color to Play:</label>
                    <select id="color" name="colorlist" form="moveForm">
                        <option value="white">White</option>
                        <option value="black">Black</option>
                    </select><br/>
                </div>
                <div className='inputDiv'>
                <label htmlFor="desc">Description:</label><br/>
                    <textarea required id='desc' name="dexc" rows="10" cols="30"></textarea>
                </div>
                <div className='inputDiv'>
                    <label htmlFor="reward">Initial Piece Position</label>
                    <input required id="pos1" type="text" placeholder="f5, Ke2, etc."/><br/>
                </div>
                <div className='inputDiv'>
                    <label htmlFor="reward">Final Piece Position</label>
                    <input required id="pos2" type="text" placeholder="f6, Ke3, etc."/><br/>
                </div>
            </div>
            <div className='submitContainer'>
                <input required type="submit" value="Submit"/>
            </div>
        </form>
    );
  }
}

export default CreateMove;
