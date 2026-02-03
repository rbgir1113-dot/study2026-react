import React from 'react';

const Amount = ({props}) => {
  const {amountMemo, setAmountCallback} = props;
  console.log("자식👶 랜더링!")

  return (
    <div>
      <h1>수량: {amountMemo}개</h1>
      <button onClick={setAmountCallback}>수량 증가!</button>
    </div>
  );
};

export default Amount;