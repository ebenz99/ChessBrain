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
            //alert("You have added a trap")
            return response
        }, (error) => {
            return error;
        });
    }

  render() {
    return (
        <form id="moveForm" onSubmit={this.submitMove} encType="multipart/form-data">
            <div className='formTitle'>
                <h2>Create Trap</h2>
            </div>
            <div className="moveFormDiv">
                <div className='inputDiv'>
                    <label className="formLabel" htmlFor="risk">Trap Name:</label>
                    <input className="formInput" id="name" required type="text" placeholder="Trap Name"/><br/>
                </div>
                <div className='inputDiv'>
                    <label className="formLabel" htmlFor="desc">Description:</label><br/>
                        <textarea required id='desc' name="dexc" rows="7" cols="30"></textarea>
                    </div>
                <div className='inputDiv'>
                    <label className="formLabel" htmlFor="reward">Initial Piece Position</label>
                    <input className="formInput" required id="pos1" type="text" placeholder="f7, Ke1, etc."/><br/>
                </div>
                <div className='inputDiv'>
                    <label className="formLabel" htmlFor="reward">Final Piece Position</label>
                    <input className="formInput" required id="pos2" type="text" placeholder="f6, e2, etc."/><br/>
                </div>
                <div className='inputDiv'>
                    <label className="formLabel" htmlFor="risk">Risk Level:</label>
                    <select className="formInput" id="risk" name="risklist" form="moveForm">
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>=
                    </select><br/>
                </div>
                <div className='inputDiv'>
                    <label className="formLabel" htmlFor="reward">Reward Level:</label>
                    <select className="formInput" id="reward" name="rewardlist" form="moveForm">
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select><br/>
                </div>
                <div className='inputDiv'>
                    <label className="formLabel" htmlFor="color">Color to Play:</label>
                    <select className="formInput" id="color" name="colorlist" form="moveForm">
                        <option value="white">White</option>
                        <option value="black">Black</option>
                    </select><br/>
                </div>
            </div>
            <div className='submitContainer'>
                <input className="submitButton" required type="submit" value="Submit"/>
            </div>
        </form>
    );
  }
}

export default CreateMove;
