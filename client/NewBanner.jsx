import React from 'react';

const NewBanner = (props) => {

  if (props.new === true) {
    return (
      <div className='new'>NEW</div>
    );
  } else {
    return '';
  }

};

export default NewBanner;