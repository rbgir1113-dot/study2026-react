import React, { useState } from 'react';

const Count = () => {

  // 훅함수 - use... (리액트에서 제공하는 훅함수)
  const [number ,setNumber ] = useState(0)

  const decrease = () => {
    setNumber(number - 1)
    console.log(number)
  }
  const increase = () => {
    setNumber(number +1)
    console.log(number)
  }

  return (
    <div>
      <button onClick={decrease}>-1</button>
      <h1>{number}</h1>
      <button onClick={increase}>+1</button>
    </div>
  );
};

export default Count;