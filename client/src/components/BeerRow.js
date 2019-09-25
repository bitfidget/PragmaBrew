import React from 'react';
import BeerTempRangeDisplay from './BeerTempRangeDisplay';
import temperatureColour from '../util/temperatureColour';

const BeerDisplay = props => {
  const styles = {
    row: {
      display: 'grid',
      gridTemplateColumns: 'auto 20% 15%',
      gridGap: '10px',
      color: 'white',
      fontSize: '2vh',
    },
    cell: {},
    numberDisplay: {
      textAlign: 'center',
      background: '#000',
      fontSize: '2em',
      color: temperatureColour(props.beer),
      margin: 'auto',
    },
    bigText: {
      fontSize: '2.4em',
      fontWeight: 'bold',
    },
    h1: {
      margin: 0,
    },
    h3: {
      margin: 0,
    },
  };

  return (
    <div style={styles.row}>
      <div style={styles.cell}>
        <h1 style={styles.bigText}>{props.beer.name}</h1>
        <h3 style={styles.h3}>{props.beer.type}</h3>
      </div>
      <div
        style={{ ...styles.cell, ...styles.numberDisplay, ...styles.bigText }}
      >
        {props.beer.temperature} °C
      </div>
      <div style={{ ...styles.cell, ...styles.numberDisplay }}>
        <BeerTempRangeDisplay beer={props.beer} />
      </div>
    </div>
  );
};

export default BeerDisplay;
