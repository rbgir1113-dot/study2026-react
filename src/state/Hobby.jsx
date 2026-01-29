import React, { useState } from 'react';

// 사용자에게 취미를 입력 받고 엔터를 누르면 화면에 실시간으로 출력한다.
// 취미가 축구라면, 글자의 크기를 50px로 바꾼다.
// 취미가 농구라면, 글자의 컬러를 blue로 바꾼다.
const Hobby = () => {
  const [hobby, setHobby] = useState("")
  const [style, setStyle] = useState({})

  const styleMap = {
    "축구": {fontSize: "50px"},
    "농구": {color: "blue"}
  }

  const handleHobbyOnKeyPress = (e) => {
    const value = e.target.value
    if(e.key === "Enter"){
      setHobby(value)
      
      // *랜더링 라이프라이클 이후!
      setStyle(styleMap[value])
    }
  }

  return (
    <div>
      <p style={style}>{hobby}</p>
      <input type="text" 
        placeholder='취미를 입력하세요'
        onKeyPress={handleHobbyOnKeyPress}
      />
    </div>
  );
};

export default Hobby;