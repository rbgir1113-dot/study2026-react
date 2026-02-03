import React from 'react';
import ChildInputComponent from './ChildInputComponent';
import { FontSizeProvider } from './FontSizeContext';

const ParentContainer = () => {

  
  return (
    <div>
      <FontSizeProvider>
        <ChildInputComponent />
      </FontSizeProvider>
    </div>
  );
};

export default ParentContainer;