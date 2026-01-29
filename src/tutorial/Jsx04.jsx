import React from 'react';

// JSX 는 if문을 사용할 수 없기 때문에 삼항 연산자를 지원한다.
// 조건식 ? 참일 때 랜더링할 JSX : 거짓일 때 랜덩링할 JSX
// 조건식 && 참일 때 랜더링할 JSX, 거짓이면 아무것도 출력되지 않음
// && 연산자는 앞의 조건식이 false이면 뒤를 실행하지 않으며, 
// false라는 값은 랜더링 되지 않는다.

const Jsx04 = () => {

  const name = "홍길동"
  const isLogin = true;
  const isGuest = false;
  
  // isGuest 가 true라면 p태그의 게스트를 화면에 출력
  // isLogin이 true라면 이름을 출력 false라면 비회원입니다를 출력
  const check1 = (isGuest === true) ? "게스트" :
   (isLogin === true) ? name : "비회원" 
  // let check2 = ""
  // if(isGuest === true) {
  //   check2 = ("게스트")     
  // }else if(isLogin === true) {
  //   check2 = name
  // }else {
  //   check2 = "비회원"
  // }

  return (
    <div>
      <p>{check1}</p>
    </div>
  );
};

export default Jsx04;