import React from 'react';

const RightArrow = (props) => {

  return (
    <div>
      <button
        onClick={props.handleArrowClick}
        name="rightArrow"
        data-testid="rightArrow"
        disabled={props.similarPage >= 3}
      >
        Right
      </button>
    </div>
  );

};

export default RightArrow;