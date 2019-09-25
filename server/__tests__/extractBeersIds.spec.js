import extractBeersIds from '../util/extractBeersIds.js';

test('Take "+" separated string of beers IDs and return an array', () => {
  let queryString = 'test beer 1+test beer 2+test beer 3';
  expect(extractBeersIds(queryString)).toEqual(
    expect.arrayContaining(['test beer 1', 'test beer 2', 'test beer 3'])
  );
});
