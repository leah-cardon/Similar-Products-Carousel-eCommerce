import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


import SuggestedProductsContainer from './SuggestedProductsContainer.jsx';


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      similarProducts: [],
      similarPage: 1,
      youMayLikePage: 1
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

  // make this reusable between both carousels
  handleArrowClick (event) {
    var clicked = event.target.name;
    this.setState(prevState => {
      return {
        similarPage:
        clicked === 'leftArrow' ? prevState.similarPage - 1 : prevState.similarPage + 1};
    });
    console.log('new page: ', this.state.similarPage);
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