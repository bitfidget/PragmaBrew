import 'regenerator-runtime/runtime';
import getMultipleApi from '../services/getMultipleApi.js';

jest.mock('../services/getMultipleApi.js');

test('Query an API with multiple ids', () => {
  let baseUrl = 'https://temperature-sensor-service.herokuapp.com/sensor/';
  let ids = ['test beer 1', 'test beer 2', 'test beer 3'];

  expect(getMultipleApi(ids)).toEqual(expect.objectContaining({}));
});
