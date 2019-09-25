import temperatureRange from '../util/temperatureRange';

const correctTemp = {
  tempMin: 4,
  tempMax: 6,
  temperature: 5,
};

const highTemp = {
  tempMin: 4,
  tempMax: 6,
  temperature: 8,
};

const lowTemp = {
  tempMin: 4,
  tempMax: 6,
  temperature: 1,
};

const extraLowTemp = {
  tempMin: 4,
  tempMax: 6,
  temperature: -5,
};

it('returns a positive value if temperature is above temp max', () => {
  expect(temperatureRange(highTemp)).toEqual(2);
});

it('returns a negative value if temperature is below temp min', () => {
  expect(temperatureRange(lowTemp)).toEqual(-3);
});

it('returns correct negative value if temperature is well below temp min', () => {
  expect(temperatureRange(extraLowTemp)).toEqual(-9);
});

it('returns nothing if temperature is within acceptable range', () => {
  expect(temperatureRange(correctTemp)).toEqual(null);
});
