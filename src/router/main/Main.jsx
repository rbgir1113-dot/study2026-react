import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { RouteContext } from '../../context/expert/RouteContext';
import useCountstore from '../../zustand/store/useCountStore';

const Main = () => {

  const {state} = useContext(RouteContext)
  const count = useCountstore((state) => state.count)

  return (
    <div>
      메인 페이지!😁
      <p>{state.user.userName}님 환영합니다</p>
      <h1>카운트 : {count}</h1>
      {/* a 태그 사용시 깜빡임 생김 */}
      {/* <a href="/intro">인트로</a> */}
      {/* <Link style={{display: "block"}} to={"/intro"}>인트로</Link> <br /> */}
      {/* <Link style={{display: "block"}} to={"/job"}>난 잡</Link> */}
      {/* 
        Link 태그를 누르면 1~100까지 랜덤한 숫자로 post로 이동
        ex) /post/2
        ex) /post/31
        post 페이지는 랜덤한 숫자의 해당하는 데이터를
        jsonplace홀더에서 요청 후 화면에 id와 title만 h1태그로 출력(useEffect)
      */}
      {/* <Link style={{display: "block"}} to={`/post/${Math.floor(Math.random() * 100) + 1}`}>난 랜덤포스트</Link> */}
      
    </div>
  );
};

export default Main;