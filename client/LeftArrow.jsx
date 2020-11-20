import React from 'react';

const LeftArrow = (props) => {

  return (
    <div>
      <button
        onClick={props.handleArrowClick}
        name="leftArrow"
        disabled={props.similarPage <= 1}
      >
        Left
      </button>
    </div>
  );

};

export default LeftArrow;