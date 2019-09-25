const mergeDataObjects = (data1, data2) => {
  let mergedData = [];

  for (let i = 0; i < data1.length; i++) {
    mergedData.push({
      ...data1[i],
      ...data2[i],
    });
  }

  return mergedData;
};

export default mergeDataObjects;
