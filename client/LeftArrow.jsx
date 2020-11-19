import React from 'react';

const LeftArrow = (props) => {

  return (
    <div>
      <button onClick={props.handleArrowClick}>
        Left
      </button>
    </div>
  );

};

export default LeftArrow;