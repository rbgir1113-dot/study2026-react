import React, { Component } from 'react';
import LifeCycleComponent from './LifeCycleComponent';


const getRandomcolor = () => {
  return "#" + Math.floor(Math.random() * 1302546).toString()
}

class LifeCycleContainer extends Component {

  // 부모의 초기 컬러는 black
  state = {
    color : "#000000"
  }
  // useState()랑 같은 것

  handleColorOnClick = () => {
    this.setState({
      color : getRandomcolor()
    })
    console.log("부모 컬러", this.state.color)
  }

  render() {
    return (
      <div>
        <button onClick={this.handleColorOnClick}>색상 변경</button>
        <LifeCycleComponent color={this.state.color}/>
      </div>
    );
  }
}

export default LifeCycleContainer;