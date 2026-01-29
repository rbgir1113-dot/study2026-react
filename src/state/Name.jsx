import React, { useState } from 'react';

const Name = () => {
  // 사용자가 입력한 이름을 화면에 실시간으로 출력
  const [name, setName] = useState()
  const handleNameOnChang= (e) => {
    setName(e.target.value)
  }

  return (
    <div>
      <p>{name}</p>
      <input type="text" onChange={handleNameOnChang}/>
    </div>
  );
};

export default Name;