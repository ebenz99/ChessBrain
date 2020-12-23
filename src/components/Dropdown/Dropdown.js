import './Dropdown.css'
import React, { Component } from 'react';
import _ from 'lodash';

// fontawsome favicons
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faBars);


class Dropdown extends Component {
  constructor(props){
    super(props);
    this.state={
      menuDown: false
    }

    this.toggle = this.toggle.bind(this);
  }


  render(){
    const items = [];
    for (let [key,value] of this.props.boardStateLibrary.entries()){
      items.push(
        <button key = {key} className = "dropdownMenuItem" onClick = {() =>
          this.props.setDefaultBoard(_.cloneDeep(value))}>
          <h2>{key}</h2>
        </button>
      );
    }
    return(
      <div className = "dropdownMenuContainer">
        <button className = 'snapshotButton' onClick = {this.toggle}><FontAwesomeIcon icon= "bars" size = "3x" /></button>
        { this.state.menuDown && (
          <div className = 'dropdownMenuContent'>
            {items}
            </div>)
          }
        </div>
    )
  }

  toggle(){
    let result = !this.state.menuDown;
    this.setState(
      {menuDown: result}
    );
  }
}

export default Dropdown;
