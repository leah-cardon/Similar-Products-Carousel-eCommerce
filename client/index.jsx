import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


import SuggestedProductsContainer from './SuggestedProductsContainer.jsx';


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      similarProducts: []
    };
    // bind methods here
  }

  componentDidMount () {
    axios.get('/api/products/similar')
      .then((products) => {
        this.setState({
          similarProducts: products.data
        });
        console.log('products in state: ', this.state.similarProducts);
      })
      .catch((err) => console.log('error in axios get request for all products: ', err));
  }

  render() {
    return <div>
      <SuggestedProductsContainer
        similarProducts={this.state.similarProducts}
      />
    </div>;
  }

}






ReactDOM.render(<App />, document.getElementById('app'));