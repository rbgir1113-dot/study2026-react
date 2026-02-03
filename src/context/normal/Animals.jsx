import React, { useContext, useState } from 'react';
import { AnimalsContext } from './AnimalsContext';

const Animals = () => {

  const {state, actions} = useContext(AnimalsContext)
  const [inputValue, setInputValue] = useState("")
  // Context에 있는 동물 세마리를 버튼으로 출력하시오
  // input에 동물을 입력 후 엔터치면 동물 버튼이 추가되게 구현하세요.
  
  const handleAnimalOnKeyPress = (e) => {
    if(e.key === "Enter") {
      actions.insert(inputValue)
      setInputValue("")
      e.target.value= "";
    }
  }
  const handleAnimalOnChange = (e) => {
    setInputValue(e.target.value)
  }
  const resultButton = state.animals.map((animal, i) => (
    <button key={i}>{animal}</button>
  ));

  return (
    <div>
      {resultButton}
      <input type="text" 
      onChange={handleAnimalOnChange} 
      onKeyPress={handleAnimalOnKeyPress} 
      placeholder='동물을 입력하세요.'/>
    </div>
  );
};

export default Animals;