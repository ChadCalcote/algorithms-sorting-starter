// Implement Quick Sort

function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }
  let pivot = array.shift();
  let left = [];
  let right = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  let leftSorted = quickSort(left);
  let rightSorted = quickSort(right);

  return [...leftSorted, pivot, ...rightSorted];

}


module.exports = {
  quickSort
};
