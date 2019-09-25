import constructQueryString from '../util/constructQueryString';

const beerData = [
  {
    id: 'Beer_1',
    type: 'Pilsner',
    tempMin: 4,
    tempMax: 6,
  },
  {
    id: 'Beer_2',
    type: 'IPA',
    tempMin: 5,
    tempMax: 6,
  },
  {
    id: 'Beer_3',
    type: 'Lager',
    tempMin: 4,
    tempMax: 7,
  },
];

const splitString = (queryString, separator) => {
  return queryString.split(separator);
};

const queryString = constructQueryString(beerData, 'id');
const queryStringTypes = constructQueryString(beerData, 'type');

it('returns a query string starting with ?', () => {
  expect(splitString(queryString, '')[0]).toEqual('?');
});

it('returns a query string starting with ?beers=', () => {
  expect(splitString(queryString, '=')[0]).toEqual('?beers');
});

it('appends number of queries in string matches data object length', () => {
  expect(splitString(splitString(queryString, '=')[1], '+').length).toEqual(
    beerData.length
  );
});

it('appends the correct data according to given key', () => {
  expect(splitString(splitString(queryStringTypes, '=')[1], '+')[0]).toEqual(
    'Pilsner'
  );
});
