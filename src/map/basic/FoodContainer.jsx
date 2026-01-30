import React from 'react';
import Food from './Food';

const FoodContainer = () => {

  const foods =[
    {
      id : 1,
      name : "치킨공식"
    },
    {
      id : 2,
      name: "종로김밥"
    },
    {
      id : 3,
      name : "버거킹"
    },
    {
      id : 4,
      name : "KFC"
    },
    {
      id : 5,
      name : "명동칼국수"
    }
  ]

  // foods.forEach((food => {
  //   const li = document.createElement("li")
  //   li.innerText = food.name
  //   document.getElementById("result").innerHTML += li
  // }))


  // const foodList = foods.map((food, i) => (
  //   <li key={i}>{food.name}</li>
  // ))

    const foodList = foods.map(({name}, i) => (
    <Food key={i} name={name} />
  ))

  return (
    <div>
      <ul id="result">
        {foodList}
      </ul>
    </div>
  );
};

export default FoodContainer;