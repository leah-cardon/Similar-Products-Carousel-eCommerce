import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import AppStyles from './AppStyles.js';


import SuggestedProductsContainer from '../components/SuggestedProductsContainer/SuggestedProductsContainer.jsx';


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      similarProducts: [],
      similarDisplayed: [],
      similarPage: 1,
      youMayLikePage: 1
    };

    this.handleArrowClick = this.handleArrowClick.bind(this);
    this.setLoved = this.setLoved.bind(this);
  }

  componentDidMount() {
    var path = window.location.pathname.split('/');
    console.log(path);
    var id = (path[2] === undefined) ? 2 : path[2];
    axios.get(`/api/products/${id}/similar`)
      .then((result) => result.data)
      .then(products => {
        this.setState({
          similarProducts: products,
          similarDisplayed: products.slice(0, 5)
        });
      })
      .catch((err) => console.log('error in axios get request for all products: ', err));
  }

  handleArrowClick(name) {
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
    const newPage = pageTurner(name);
    const displayed = this.state.similarProducts.slice(...ranges[newPage]);

    this.setState(prevState => {
      return {
        similarPage: newPage,
        similarDisplayed: displayed
      };
    });
  }

  setLoved(itemId) {
    const lovedUpdater = (allItems, id) => {
      return allItems.map((item) => {
        if (item && item.id === id) {
          item.loved === true ? item.loved = false : item.loved = true;
        }
        return item;
      });
    };
    let updatedProducts = lovedUpdater(this.state.similarProducts, itemId);
    this.setState(prevState => {
      return {
        similarProducts: updatedProducts
      };
    });
  }

  render() {
    return (
      <SuggestedProductsContainer
        similarDisplayed={this.state.similarDisplayed}
        handleArrowClick={this.handleArrowClick}
        similarPage={this.state.similarPage}
        setLoved={this.setLoved}
      />
    )
  };
}

export default App;