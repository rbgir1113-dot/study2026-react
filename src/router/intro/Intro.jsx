import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Intro = () => {

  // ***query string***을 가져오는 훅함수

  const [searchParams] = useSearchParams()
  console.log(searchParams.get("job"))
  // 해당 직업을 클릭시 화면이 바뀌어야함
  
  // 해당된 직업에 name, salary, skills 들이 들어가야함
  // 

  const introduce = {
    developer: {
      name: "예스민균",
      salary: 3000,
      skills: ["HTML", "CSS", "JS", "React"]
    },
    police: {
      name: "약소훈",
      salary: 5000,
      skills: ["기침", "달리기", "태권도", "배드민턴"]
    },
    firefighter: {
      name: "김유대",
      salary: 2,
      skills: ["운전", "화재진압", "입으로 물뿜기", "물대포"]
    },
  }

  // 각각의 직업에 맞는 소개페이지를 구성하세요.
  // p태그 이름(name)
  // p태그 연봉(salary)
  // li태그 skills 출력

  // const jobValue = searchParams.get("job")
  const value = introduce[searchParams.get("job")]

  return (
    <div>
      소개 페이지!😁
      <p>{value.name}</p>
      <p>{value.salary}</p>
      
      <ul>
        {value.skills.map((skill, i) => (
          <li key={i}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Intro;