import React from 'react';
import CharContext from './CharContext';

const C = () => {
  return (
    <div>
      <CharContext.Consumer>
        {(context) => (
          <>
          <p style={context}>리액트 My Context!</p>
          <button onClick={() => context.setFontSize("100px")}>글자 100px 크기 변경!</button>
          </>
        )}


      </CharContext.Consumer>
    </div>
  );
};

export default C;