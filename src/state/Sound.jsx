import React, { useState } from 'react';

const Sound = () => {

  const [sound, setSound] = useState("")
    
  const catSound = () => {
    setSound("야옹")
  }
  const dogSound = ()=> {
    setSound("멍멍")
  }

  return (
    <div >
      <h1>{sound}</h1>
      <button onClick={catSound}>고양이</button>
      <button onClick={dogSound}>강아지</button>
    </div>
  );
};

export default Sound;