// import React, { useContext, useState } from 'react';
// import { AnimalsContext } from './AnimalsContext';

// const Animals = () => {

//   const {state, actions} = useContext(AnimalsContext)
//   // actions 안에 insert 메서드와 remove 메서드가 있으므로 객체로 들고 올수 있음
//   const {insert, remove} = actions 
  
//   const {animals} = state
//   // 배열의 값을 순서대로 접근해서 버튼으로 바꾼다.
//   const animalList = animals.map((animal)=> (
//     <button>{animal}</button>
//   ))

//   // 넘겨줌 -> 받을 준비 필요
//   // insert()


//   const [inputValue, setInputValue] = useState("")
//   // Context에 있는 동물 세마리를 버튼으로 출력하시오
//   // input에 동물을 입력 후 엔터치면 동물 버튼이 추가되게 구현하세요.
//   // 동물 버튼을 누르면, 그 버튼을 삭제하는 로직 완성
//   const handleAnimalOnKeyPress = (e) => {
//     if(e.key === "Enter") {
//       actions.insert(inputValue)
//       setInputValue("")
//       e.target.value= "";
//     }
//   }

//   const handleAnimalOnChange = (e) => {
//     setInputValue(e.target.value)
//   }

//   const resultButton = state.animals.map((animal, i) => (
//     <button key={i}>{animal}</button>
//   ));



//   return (
//     <div>
//       {resultButton}
//       <input type="text" 
//       onChange={handleAnimalOnChange} 
//       onKeyPress={handleAnimalOnKeyPress} 
//       placeholder='동물을 입력하세요.'/>
//     </div>
//   );
// };

// export default Animals;

import React, { useContext } from 'react';
import { AnimalsContext } from './AnimalsContext';

const Animals = () => {

  // Context에 있는 동물 세마리를 버튼으로 출력하시오
  const {state, actions} = useContext(AnimalsContext)
  const {insert, remove} = actions;
  const {animals} = state;

  // 동물 버튼을 누르면, 그 버튼을 삭제하는 로직 완성!
  // context에 remove 메서드 구현!

  const handleAnimalAdd = (e) => {
          if(e.key === 'Enter'){
            insert(e.target.value)
            e.target.value=""
          }
        }
  

  // const handleAnimalRemove = (e) => {
  //   if(e.click === "Click") {
  //     remove(e.target.value)
  //     }
  // } 
  // 버튼을 클릭시 기존에 있던 버튼들이 줄어드는 변경! 
  // 버튼 클릭시 화면에서 사라져야 함
  // const [isClick, setIsClick] = useState([])

  const animalList = animals.map((animal, i) => (
    <button key={i} onClick={() => remove(i)}> 
    {animal}</button>
  ))

  return (
    <div>
      <input 
        type="text" placeholder='동물을 입력하세요.'
        onKeyPress={handleAnimalAdd}
      />
      {animalList}
    </div>
  );
};

export default Animals;