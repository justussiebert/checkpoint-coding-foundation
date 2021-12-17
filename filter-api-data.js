function filterApiData(apiData, mandatoryKeys) {
  // the task was to return a filtered array, so, it seemed to be logic to use the filter api...
  let filterdApiData = apiData.filter(function (item) {
    // get all keys from object
    let arrayKeys = Object.keys(item);

    // at the beginning: data is set be in (we are optimistic)
    let checkKey = true;

    for (let i = 0; i < mandatoryKeys.length; i++) {
      // if is not in list: data is out
      if (!arrayKeys.includes(mandatoryKeys[i])) {
        checkKey = false;
      }
    }
    // if test is o.k., key is in list: return the filtered array
    if (checkKey === true) {
      return true;
    }
  });

  return filterdApiData;
}
