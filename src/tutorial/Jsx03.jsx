import { jsx } from "react/jsx-runtime"


const Jsx03 = () => {
  // 이름, 나이, 만나이
  const name = "홍길동"
  const age = 20

  // JSX : {} JS의 문법을 사용하기 위한 템플릿
  
  return (
    <>
      <p>이름 : {name}</p>
      <p>나이 : {age}</p>
      <p>만 나이 : {age - 1}</p>
    </>
  )
}

export default Jsx03;