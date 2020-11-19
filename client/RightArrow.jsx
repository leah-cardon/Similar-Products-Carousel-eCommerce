import React from 'react';

const RightArrow = (props) => {

  return (
    <div>
      <button
        onClick={props.handleArrowClick}
        name="rightArrow"
      >
        Right
      </button>
    </div>
  );

};

export default RightArrow;