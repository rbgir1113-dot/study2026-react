import React from 'react';

const Sport = ({name, personnel}) => {
  
  return (
    <li> 
      {name} : {personnel}명
    </li>  

    );
};

export default Sport;