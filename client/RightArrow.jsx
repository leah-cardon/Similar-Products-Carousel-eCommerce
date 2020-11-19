import React from 'react';

const RightArrow = (props) => {

  return (
    <div>
      <button onClick={props.handleArrowClick}>
        Right
      </button>
    </div>
  );

};

export default RightArrow;