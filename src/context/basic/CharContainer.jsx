import React, { useState } from 'react';
import A from './A';
import CharContext from './CharContext';

const CharContainer = () => {
  
  const [fontSize, setFontSize] = useState("30px")

  
  return (
    <CharContext.Provider value={{color : "pink" , fontSize : fontSize, setFontSize}} >
      <A />
    </CharContext.Provider>
  );
};

export default CharContainer;