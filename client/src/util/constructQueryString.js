const constructQueryString = (data, key) => {
  const queryPrefix = '?beers=';
  let queryAppends = '';

  data.forEach((obj, i) => {
    queryAppends += (i == 0 ? '' : '+') + obj[key];
  });

  return queryPrefix + queryAppends;
};

export default constructQueryString;
