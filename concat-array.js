function concat(firstArray, secondArray) {
  for (var count = 0; count < secondArray.length; count++) {
    firstArray.push(secondArray[count]);
  }
  Return firstArray;
}