import React, { Component } from 'react';

class LifeCycleComponent extends Component {

  // 자식 필드
  state = {
    number : 0,
    color : null
  }

  handleNumberOnClick = () => {
    this.setState({
      number : this.state.number + 1
    })
  }


  // ref
  colorRef = null;

  constructor(props) {
    super(props)
    console.log(props)
  }



  // V.D 생성자 메서드
  // 기존에는 V.D에 있는 것을 인식 하지 못함
  // V.D을 먼저 올리기 위해선 static 메서드를 사용해야 한다.
  // getDerivedStateFromProps
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps", nextProps, prevState)
    if(nextProps.color !== prevState.color) {
      return { color : nextProps.color }
    }
    return null; 
  }

  // componentDidMount
  // 비동기 관련 처리할때 이 코드를 사용
  componentDidMount() {
    console.log("componentDidMount")
  }


  // shouldComponentUpdate

  shouldComponentUpdate(nextProps,nextState) {
    console.log("shouldComponentUpdate", nextProps, nextState)
    return nextState.number % 5 !== 0 
  }


  // getSnapshotBeforeUpdate 와 componentDidUpdate 는 세트로 같이 꼭 와야하는 것
  getSnapshotBeforeUpdate(prevProps, prevState) {
    if(prevProps.color !== this.props.color) {
      return this.colorRef.style.backgroundColor;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(prevState) {
      console.log(`업데이트 직전 state : ${prevState}`)
    }

    if(prevProps) {
      console.log(`업데이트 직전 색깔 ${snapshot}`)
    }
  }






  render() {
    return (
      <div>
        <div
          ref={(el) => this.colorRef = el} 
          style={{
            width : "100px",
            height : "100px",
            // 부모가 넘겨준 컬러 사용
            backgroundColor: this.state.color,
            display : "flex",
            justifyContent : "center",
            alignContent : "center",
            color: "#000000"
        }}
        >
          {/* 자식의 상태 값 */}
          <h1>{this.state.number}</h1>
        </div>
        <button onClick={this.handleNumberOnClick}>더하기 버튼</button>
      </div>
    );
  }
}

export default LifeCycleComponent;