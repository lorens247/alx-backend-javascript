export default function appendToEachArrayValue(array, appendString) {
  /*
    create a new variable to store the updated array
    avoids assign a new value to a function parameter - parameters are immutable
    */
  const updatedArray = [];

  // for ... of loop iterate over the original array;
  // push the updated values to the new array
  for (const value of array) {
    const updatedVal = appendString + value;
    updatedArray.push(updatedVal);
  }

  return updatedArray;
}
