// import React, {useRef, useState} from 'react';

// const FoodContainer = () => {
//   const [foods, setFoods] = useState([])
//   const inputRef = useRef([])

//   const handleButtonOnClick = () => {
//     const kor = inputRef.current[0].value
//     const eng = inputRef.current[1].value
//     const failed = "다시 입력해주세요"
    
//     if(!kor || !eng) {
//       alert(failed)
//       return;
//     }
    
//     setFoods([...foods, {kor, eng, checked: false}]) 
//     inputRef.current[0].value = ""
//     inputRef.current[1].value = ""
//   }
  
  
//     const handleCheck = (i) => {
//       const newFoods = [...foods]
//       newFoods[i].checked = !newFoods[i].checked
//       setFoods(newFoods);
//     }

//     const handleDeleteFood = () => {
//       setFoods(foods.filter(food => !food.checked))
//     }


//   const foodList = foods.map((food, i) => (
//     <li key={i}>
//       <input type="checkbox" checked={food.checked} onChange={() => handleCheck(i)}/>
//       {food.kor} ({food.eng})
//       </li>
//   ))
  




//   return (
//     <div>
//       <input type="text" ref={(el) => {inputRef.current[0] = el}} placeholder='한국 음식 이름'/>
//       <input type="text" ref={(el) => {inputRef.current[1] = el}} placeholder='영어 음식 이름'/>
//       <button onClick={handleButtonOnClick}>추가</button>
//       <button onClick={handleDeleteFood}>삭제</button>
//       <ul>
//         {foodList}
//       </ul>
//     </div>
//   );
// };

// export default FoodContainer;


import React, { useRef, useState } from 'react';

// 코드를 완성시켜라! expert!
const FoodContainer = () => {
  
  const [foods, setFoods] = useState([])
  const [checked, setChecked] = useState([])

  const inputRef = useRef([])
  const addFood = () => {
    const kor = inputRef.current[0].value
    const eng = inputRef.current[1].value
    setFoods([...foods, {kor, eng}])
    setChecked([...checked, false])
  }

  const handleCheckboxOnChange = (_, i) => {
    setChecked(checked.map((check, idx) => (idx === i ? !check : check)))
  }

  const removeFoods = () => {
    const newFood = foods.filter((_, i) => !checked[i])
    setFoods(newFood)
    setChecked(new Array(newFood.length).fill(false))
  }

  // 컴포넌트로 분리
  // ******** 오늘까지 *********
  const foodList = foods.map(({kor, eng}, i) => (
    <li key={i}>
      <input 
        type="checkbox"
        onChange={(e) => {handleCheckboxOnChange(e, i)}}
      />
      <span>{kor}({eng})</span>
    </li>
  ))

  return (
    <div>
      <input type="text" 
        placeholder='한국 음식 이름'
        ref={(el) => { inputRef.current[0] = el}}
      />
      <input type="text" 
        placeholder='영어 음식 이름'
        ref={(el) => { inputRef.current[1] = el}}
      />
      <button onClick={addFood}>추가</button>
      <button onClick={removeFoods}>삭제</button>
      <ul>
        {foodList}
      </ul>
    </div>
  );
};

export default FoodContainer;