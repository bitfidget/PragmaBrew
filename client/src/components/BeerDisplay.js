import React from 'react';
import BeerRow from './BeerRow';
import BeerTempRangeDisplay from './BeerTempRangeDisplay';
import temperatureColour from '../util/temperatureColour';

const BeerDisplay = props => {
  const styles = {
    container: {
      display: 'grid',
      background: 'black',
    },
  };

  return (
    <div style={styles.container}>
      {props.beers.map((value, index) => {
        return <BeerRow key={index} beer={value} />;
      })}
    </div>
  );
};

export default BeerDisplay;
