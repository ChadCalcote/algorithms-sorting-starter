// Implement Merge Sort

function merge(array1, array2) {
  let mergedArray = [];

  while (array1.length && array2.length) {
    if (array1[0] > array2[0]) {
      mergedArray.push(array2.shift());
    } else {
      mergedArray.push(array1.shift());
    }
  }
  while (array1.length) {
    mergedArray.push(array1.shift());
  }
  while (array2.length) {
    mergedArray.push(array2.shift());
  }
  return mergedArray;
}

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  let midIdx = Math.floor(array.length / 2);
  let leftHalf = array.slice(0, midIdx);
  let rightHalf = array.slice(midIdx);

  let sortedLeft = mergeSort(leftHalf);
  let sortedRight = mergeSort(rightHalf);

  return merge(sortedLeft, sortedRight);
}


module.exports = {
  merge,
  mergeSort,
};
