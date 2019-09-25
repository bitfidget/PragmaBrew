const temperatureRange = beer => {
  const temp = beer.temperature;
  const max = beer.tempMax;
  const min = beer.tempMin;

  if (temp > max) {
    return temp - max;
  } else if (temp < min) {
    return temp - min;
  } else {
    return null;
  }
};

export default temperatureRange;
