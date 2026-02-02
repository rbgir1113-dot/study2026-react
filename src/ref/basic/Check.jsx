import React, { useRef, useState } from 'react';

const Check = () => {
  // ref
  // "검사!"버튼을 누르면 아이디 또는 비밀번호를 검사하기
  // 아이디 사용불가한 아이디가 존재
  // test123@gmail.com
  // test456@gmail.com
  // test678@gmail.com
  // 비밀번호가 없거나 위에 사용 불가한 아이디를 사용했다면 
  // #result에 "검사 실패!"를 출력
  // 정상적으로 입력했다면 #result에 "검사 성공😁"을 출력
  const ids = ["test123@gmail.com", "test456@gmail.com", "test678@gmail.com"];
  const inputRef = useRef([])
  const [result, setResult] = useState("")

  const handleButtonOnClick = () => {
    const id = inputRef.current[0].value
    const password = inputRef.current[1].value
    const failed = "검사 실패!"
    const successed = "검사 성공😁";

    // 아이디 검사
    // .includes(), filter(), .indexOf, .some(), .find(), 
    const existId = ids.some((userId) => userId === id)
    if(existId || !password){
      setResult(failed)
      return;
    }

    // 비밀번호 검사
    setResult(successed)
  }

  return (
    <div>
      <form>
        <div>
          <label>
            <span>아이디</span><input type="text" ref={(el) => {inputRef.current[0] = el}} />
          </label>
        </div>
        <div>
          <label>
            <span>비밀번호</span><input type="password" ref={(el) => {inputRef.current[1] = el}} />
          </label>
        </div>
        <button type='button' onClick={handleButtonOnClick}>검사!</button>
      </form>
      <div>
        <p id='result'>{result}</p>
      </div>
    </div>
  );
};

export default Check;