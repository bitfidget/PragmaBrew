import mergeDataObjects from '../util/mergeDataObjects';

const data1 = [
  {
    id: 'Beer_1',
    type: 'Pilsner',
    tempMin: 4,
    tempMax: 6,
  },
];

const data2 = [
  {
    id: 'Beer_1',
    name: "Pete's Pils Plus",
    temperature: 5,
  },
];

const mergedData = [
  {
    id: 'Beer_1',
    type: 'Pilsner',
    tempMin: 4,
    tempMax: 6,
    name: "Pete's Pils Plus",
    temperature: 5,
  },
];

it('merges two data objects correctly', () => {
  expect(mergeDataObjects(data1, data2)).toEqual(mergedData);
});
