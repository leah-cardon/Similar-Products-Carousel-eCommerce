import React from 'react';

const LeftArrow = (props) => {

  return (
    <div>
      <button
        onClick={props.handleArrowClick}
        name="leftArrow"
      >
        Left
      </button>
    </div>
  );

};

export default LeftArrow;