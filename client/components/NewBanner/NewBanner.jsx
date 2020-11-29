import React from 'react';
import NewBannerStyles from './NewBannerStyles.js';

const NewBanner = (props) => {

  if (props.new === true) {
    return (
      <NewBannerStyles>
        <div>
          <span className={props.size + 'New'}>NEW</span>
        </div>
      </NewBannerStyles>
    );
  } else {
    return <div></div>;
  }

};

export default NewBanner;