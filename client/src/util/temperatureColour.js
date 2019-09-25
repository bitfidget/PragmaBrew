const temperatureRange = beer => {
  const temp = beer.temperature;
  const max = beer.tempMax;
  const min = beer.tempMin;

  if (temp > max) {
    return 'red';
  } else if (temp < min) {
    return 'blue';
  } else {
    return 'white';
  }
};

export default temperatureRange;
