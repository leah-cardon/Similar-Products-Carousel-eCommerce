import React from 'react';

const LeftArrow = (props) => {
  return (
    <>
      <button
        onClick={() => props.handleArrowClick('leftArrow')}
        name="leftArrow"
        data-testid="leftArrow"
        disabled={props.similarPage <= 1}
      >
        <svg viewBox="0 0 16 32">
          <path d="M2.2 16.052l13.5-14.33c.1-.098.3-.397.3-.695 0-.498-.4-.995-.9-.995-.3 0-.5.2-.6.298L.4 15.256c-.2.298-.4.497-.4.796 0 .298.1.398.2.497l.1.1L14.5 31.67c.1.1.3.3.6.3.5 0 .9-.5.9-.996 0-.3-.2-.498-.3-.697L2.2 16.05z">
          </path>
        </svg>
      </button>
    </>
  );

};

export default LeftArrow;