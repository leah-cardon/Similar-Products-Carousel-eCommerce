import React from 'react';

const NewBanner = (props) => {

  if (props.new === true) {
    return (
      <div>
        <span className='new'>NEW</span>
      </div>
    );
  } else {
    return <div></div>;
  }

};

export default NewBanner;