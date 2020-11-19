import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


import SuggestedProductsContainer from './SuggestedProductsContainer.jsx';


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      similarProducts: [],
      currentPageSimilarProducts: 1,
      currentPageYouMayAlsoLike: 1
    };

    this.handleArrowClick = this.handleArrowClick.bind(this);
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

  handleArrowClick (event) {
    console.log('name of clicked carousel arrow button: ', event.target.name);
  }

  render() {
    return <div>
      <SuggestedProductsContainer
        similarProducts={this.state.similarProducts}
        handleArrowClick={this.handleArrowClick}
      />
      {/* you may also like container */}
    </div>;
  }

}






ReactDOM.render(<App />, document.getElementById('app'));