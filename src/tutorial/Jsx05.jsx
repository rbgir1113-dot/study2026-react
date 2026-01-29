// import React from 'react';

// // age 상수로 나이를 설정한다(임의)
// // 19세 이상 성인이라면 "입장 가능"
// // 성인이 아니라면 "입장 불가"
// // 성인과 관계 없이 age가 짝수라면 "당첨"을 출력



// const Jsx05 = () => {
//   const [age,pass, notPass, lucky, unLucky] = [20, "입장 가능" , "입장 불가", "당첨", "꽝"]
  
//   // const check1 = age > 19 ? "입장 가능" : "입장 불가"
//   // const check2 = age % 2 === 0 ? "당첨" : "꽝" 
  
//   // return (
//   //   <div>
//   //       <p>{check1}</p>
//   //       <p>{check2}</p>
//   //     </div>
//   //   );
    
//   // const check = age > 19 ? "입장 가능" : "입장 불가"
//   // if(age % 2 === 0) {
//   //   return (
//   //     <div>
//   //       <p>{check}</p>
//   //       <p>당첨</p>
//   //     </div>
//   //   );
//   // } else {
//   //   return (
//   //     <div>
//   //       <p>{check}</p>
//   //       <p>"꽝"</p>
//   //     </div>
//   //   );


//   if(age > 19) {
//     if(age % 2 === 0) {
//       return (
//         <div>
//           <p>{pass}</p>
//           <p>{lucky}</p>
//         </div>
//       );
//     } else {
//       return (
//         <div>
//           <p>{pass}</p>
//           <p>{unLucky}</p>
//         </div>
//       );
//     }
//   }else {
//       if(age % 2 === 0) {
//         return (
//           <div>
//             <p>{notPass}</p>
//             <p>{lucky}</p>
//           </div>
//         );
//       } else {
//         return (
//           <div>
//             <p>{notPass}</p>
//             <p>{unLucky}</p>
//           </div>
//         );
      
//   }
//   // }

  

// }};

// export default Jsx05;

import React from 'react';
import PassComponent from './PassComponent';
import NotPassComponent from './NotPassComponent';
import LuckyComponent from './LuckyComponent';
import UnLuckyComponent from './UnLuckyComponent';
import AgeComponent from './AgeComponent';

// age 상수로 나이를 설정한다(임의)
// 19세 이상 성인이라면 "입장 가능"
// 성인이 아니라면 "입장 불가"
// 성인과 관계 없이 age가 짝수라면 "당첨"을 출력

const Jsx05 = () => {
  const age = <AgeComponent />
  const isAdult = age >= 19;
  const isEven = age % 2 === 0;

  const enter = isAdult ? <PassComponent /> : <NotPassComponent />
  const win = isEven ? <LuckyComponent /> : <UnLuckyComponent />
  const result = (
    <div>
      <span>당신의 나이는 {age}이므로,</span>
      {enter}
      {win}
    </div>
  )
  return (
    <>
      {result}
    </>
  );
};

export default Jsx05;