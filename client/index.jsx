import React from 'react';
import ReactDOM from 'react-dom';

import SuggestedProductsContainer from './SuggestedProductsContainer.jsx';


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

    };
    // bind methods here
  }

  render() {
    return <div><SuggestedProductsContainer /></div>;
  }

}






ReactDOM.render(<App />, document.getElementById('app'));