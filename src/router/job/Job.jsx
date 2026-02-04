import React from 'react';
import { Link } from 'react-router-dom';

const Job = () => {
  return (
    <div>
      직업 페이지!
      {/* 
        구분점!
        path를 통해서도 값을 넘길 수 있다.
        1. Query String -> useSearchParams()[0].get("key") 사용이지만 구조 분해할당으로 할수 있음
        2. Path Variable -> /path/:변수명
      */}

      <Link style={{display: "block"}} to={"/intro?job=developer"}>개발자 소개페이지</Link>
      <Link style={{display: "block"}} to={"/intro?job=police"}>경찰 소개페이지</Link>
      <Link style={{display: "block"}} to={"/intro?job=firefighter"}>소방관 소개페이지</Link>
    </div>
  );
};

export default Job;