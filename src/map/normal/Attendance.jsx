import React, {useState} from 'react';

const Attendance = ({name, isPresent}) => {
  const [color,setColor] = useState(true);
  const handleClick = () => {
    setColor(!color) 
  }

  return (
    <li onClick={handleClick} 
    style={{color : color ? "black" : "blue", cursor : "pointer"}}>
      이름: {name}({isPresent ? "출석" : "결석"})
    </li>
  );
};

export default Attendance;