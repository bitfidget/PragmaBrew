import axios from 'axios';

const getMultipleApi = async (baseUrl, ids) => {
  // return array

  try {
    let promises = [];

    for (let i = 0; i < ids.length; i++) {
      promises.push(axios.get(baseUrl + ids[i]));
      console.log('beer ' + i + ' temperature fetched');
    }

    return await Promise.all(promises);
  } catch (error) {
    console.error(`Error at getTemps: ${error.code}`);
  }
};

export default getMultipleApi;
