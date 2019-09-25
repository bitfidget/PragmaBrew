import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
import beerData from './data/beer-data';
import constructQueryString from './util/constructQueryString';
import mergeDataObjects from './util/mergeDataObjects';
import BeerDisplay from './components/BeerDisplay';

class App extends Component {
  constructor() {
    super();
    this.state = {
      response: false,
      endpoint: 'http://127.0.0.1:4001/' + constructQueryString(beerData, 'id'),
      beerData: beerData,
    };
  }

  componentDidMount() {
    const { endpoint } = this.state;
    // connect via web socket
    const socket = socketIOClient(endpoint);
    socket.on('FromAPI', data => {
      // update the beer data to reflect the new temps
      let updatedData = mergeDataObjects(this.state.beerData, data);
      // then update state to reflect
      this.setState({ beerData: updatedData });
    });
  }

  render() {
    return <BeerDisplay beers={this.state.beerData} />;
  }
}

export default App;
