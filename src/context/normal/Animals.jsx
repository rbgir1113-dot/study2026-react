import React, { useContext, useState } from 'react';
import { AnimalsContext } from './AnimalsContext';

const Animals = () => {

  // Context에 있는 동물 세마리를 버튼으로 출력하시오
  // input에 동물을 입력 후 엔터치면 동물 버튼이 추가되게 구현하세요.
  const [idx, setIdx] = useState(-1)
  const {state, actions} = useContext(AnimalsContext)

  const handleClick = () => {
    setIdx((prev) => prev + 1)
  }

  const result = 

  console.log(state.animals[idx])
  return (
    <div>
      
      <input type="text" placeholder='동물을 입력하세요.'/>
      <button onClick={handleClick}>동물 추가</button>
      <ul>

      </ul>
    </div>
  );
};

export default Animals;