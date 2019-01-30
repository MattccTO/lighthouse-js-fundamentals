function merge(firstArray, secondArray) {
  var sortedArray = [];
  var loopLimit = firstArray.length + secondArray.length;
  for (var i = 0; i < loopLimit; i++) {
    if (firstArray[i] == undefined) {
      sortedArray.push(secondArray[i])
    } else if (secondArray[i] == undefined) {
      sortedArray.push(firstArray[i])
    } else if (firstArray[i] < secondArray[i]) {
      sortedArray.push(firstArray[i]);
      secondArray.unshift(0);
    } else if (secondArray[i] < firstArray[i]) {
      sortedArray.push(secondArray[i]);
      firstArray.unshift(0);
    } else if (firstArray[i] == secondArray[i]) {
      sortedArray.push(firstArray[i]);
      sortedArray.push(secondArray[i]);
      secondArray.unshift(0);
      firstArray.unshift(0);
      i = i + 1;
    }
  }
  return sortedArray;
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);