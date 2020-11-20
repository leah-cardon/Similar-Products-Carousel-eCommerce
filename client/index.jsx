import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


import SuggestedProductsContainer from './SuggestedProductsContainer.jsx';


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      similarProducts: [],
      // the 5 shown on the current page
      similarDisplayed: [],
      similarPage: 1,
      youMayLikePage: 1
    };

    this.handleArrowClick = this.handleArrowClick.bind(this);
  }

  componentDidMount () {
    axios.get('/api/products/1/similar')
      .then((products) => {
        this.setState({
          similarProducts: products.data,
          similarDisplayed: products.data.slice(0, 5)
        });
      })
      .catch((err) => console.log('error in axios get request for all products: ', err));
  }

  // make this reusable between both carousels
  handleArrowClick (event) {
    const clicked = event.target.name;
    const ranges = {
      '1': [0, 5],
      '2': [5, 10],
      '3': [10, 15]
    };
    const pageTurner = (eventName) => {
      if (eventName === 'leftArrow') {
        return this.state.similarPage - 1;
      } else {
        return this.state.similarPage + 1;
      }
    };
    const newPage = pageTurner(clicked);
    const displayed = this.state.similarProducts.slice(...ranges[newPage]);

    this.setState(prevState => {
      return {
        similarPage: newPage,
        similarDisplayed: displayed
      };
    });
  }

  render() {
    return <div>
      <SuggestedProductsContainer
        similarDisplayed={this.state.similarDisplayed}
        handleArrowClick={this.handleArrowClick}
        similarPage={this.state.similarPage}
      />
      {/* you may also like container */}
    </div>;
  }

}

ReactDOM.render(<App />, document.getElementById('app'));