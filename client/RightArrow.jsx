import React from 'react';

const RightArrow = (props) => {

  return (
    <div>
      <button
        onClick={props.handleArrowClick}
        name="rightArrow"
        // if on page three, make this button disabled (different style?)
      >
        Right
      </button>
    </div>
  );

};

export default RightArrow;