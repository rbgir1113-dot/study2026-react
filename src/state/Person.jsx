// import React, { useState } from 'react';

// const Person = () => {
  
  // 난수는 임의로 최대 600사이의 값으로 설정한다.
  // button을 눌러서 나오는 랜덤한 숫자가 짝수라면, 짝수를 출력(색상은 핑크)
  // button을 눌러서 나오는 랜덤한 숫자가 홀수라면, 홀수를 출력(색상은 그린) 
//   const [value, setValue] = useState("")
//   const [color, setColor] = useState("")
//   const oddOrEven = value % 2 ? "pink" : "green"
//   const randomValue = Math.floor(Math.random()*100)

//   const randomNumber = () => {
//     return setValue(randomValue)
//   }

//   const handleColorOnClick = () => {
//     setColor(oddOrEven)
//   }
  
//   return (
//     <div>
//       <p style={{color}}>{value}</p>
//       <button onClick={handleColorOnClick} onChange={randomNumber}>숫자 출력</button>
//     </div>
//   );
// };

// export default Person;


import React, { useState } from 'react';

const Person = () => {
  
  // 난수는 임의로 최대 600사이의 값으로 설정한다.
  // button을 눌러서 나오는 랜덤한 숫자가 짝수라면, 짝수를 출력(색상은 핑크)
  // button을 눌러서 나오는 랜덤한 숫자가 홀수라면, 홀수를 출력(색상은 그린) 
  const [result, setResult] = useState("")
  const [color, setColor] = useState("")
  const getRandomNumber = () => {
    return Math.floor((Math.random() * 600))
  }
  
  const handleResultOnClick = () => {
    const getOddAndEven = getRandomNumber() % 2 ? "홀수" : "짝수";
    setResult(getOddAndEven)
    setColor(getOddAndEven === "홀수" ? "green" : "pink")
  }

  return (
    <div>
    <h1 style={{color}}>{result}</h1>
    <button onClick={handleResultOnClick}>
      랜덤 생성!
    </button>    
    </div>
  );
};

export default Person;