import React , {useState} from 'react';

const Checkbox = ({value}) => {
  const [check, setCheck] = useState(true)
  const handleClick = () => {
    setCheck(!check)
  }

  return (
    <li onClick = {handleClick}>
      {value}
    </li>
  );
};

export default Checkbox;