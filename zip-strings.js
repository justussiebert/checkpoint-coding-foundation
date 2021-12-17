function zipStrings(strA, strB) {
  // Add you solution here
  // First: declare all needed variables
  const arrayA = strA.split("");
  const arrayB = strB.split("");
  let arrayBoth = [];
  let arraySmaller = [];
  let stringBoth;

  // check: which array is longer, we take this as the main array we will work on
  // the smaller array we need later too
  if (arrayA.length >= arrayB.length) {
    arrayBoth = arrayA;
    arraySmaller = arrayB;
  } else {
    arrayBoth = arrayB;
    arraySmaller = arrayA;
  }

  // beacause we want to splice the main array, we have to remember the position, where we want to insert the item from the smaller array...
  let counter = 0;
  // we go through the smaller array, if it is filled, and fill up the bigger array with the smaller array's item...
  if (arraySmaller.length > 0) {
    for (let i = 0; i < arraySmaller.length; i++) {
      // we want to insert the item of the smaller array at position x, behind the item of bigger array, after (therefore: counter++) position x
      counter++;
      arrayBoth.splice(counter, 0, arraySmaller[i]);
      // ...and because, after we inserted the item, big array ist bigger for 1 item, so we have to set our counter +1 again...
      counter++;
    }
  }

  //last, but not least (sometimes, after all good work done, this is forgotten...), join together...
  stringBoth = arrayBoth.join("");

  // voila...
  return stringBoth;
}
