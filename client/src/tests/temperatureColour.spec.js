import temperatureColour from '../util/temperatureColour';

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

it('returns red if temperature is above temp max', () => {
  expect(temperatureColour(highTemp)).toEqual('red');
});

it('returns blue if temperature is below temp min', () => {
  expect(temperatureColour(lowTemp)).toEqual('blue');
});

it('returns blue if temperature is well below temp min', () => {
  expect(temperatureColour(extraLowTemp)).toEqual('blue');
});

it('returns white if temperature is within acceptable range', () => {
  expect(temperatureColour(correctTemp)).toEqual('white');
});
