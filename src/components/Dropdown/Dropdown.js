import React, { Component } from 'react';


class Dropdown extends Component {
  constructor(props){
    super(props);

  }


  render(){
    const items = [];
    for (let [key,value] of this.props.boardStateLibrary.entries()){
      items.push(<button key = {key}> {key}</button>);
    }
    return(
      <div>
        {items}
      </div>
    )
  }
}

export default Dropdown;
