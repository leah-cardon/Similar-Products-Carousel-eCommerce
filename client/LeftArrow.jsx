import React from 'react';

const LeftArrow = (props) => {

  return (
    <div>
      <button
        onClick={props.handleArrowClick}
        name="leftArrow"
        // if on page one, make this button disabled (different style?)
      >
        Left
      </button>
    </div>
  );

};

export default LeftArrow;