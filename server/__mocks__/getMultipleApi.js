const beers = [
  {
    id: 'mock beer 1',
    temperature: '1',
  },
  {
    id: 'mock beer 2',
    temperature: '2',
  },
];

export default function request(baseUrl, ids) {
  return new Promise((resolve, reject) => {
    process.nextTick(() =>
      beers
        ? resolve(beers)
        : reject({
            error: 'Could not fetch beers',
          })
    );
  });
}
