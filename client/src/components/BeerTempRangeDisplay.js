import React from 'react';
import temperatureRange from '../util/temperatureRange';

const BeerTempRangeDisplay = props => {
  return temperatureRange(props.beer) ? temperatureRange(props.beer) : 'OK';
};

export default BeerTempRangeDisplay;
