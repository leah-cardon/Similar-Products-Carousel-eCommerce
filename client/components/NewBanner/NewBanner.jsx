import React from 'react';
import NewBannerStyles from './NewBannerStyles.js';

const NewBanner = (props) => {

  if (props.new === true) {
    return (
      <div>
        <span className={props.size + 'New'}>NEW</span>
      </div>
    );
  } else {
    return <div></div>;
  }

};

export default NewBanner;