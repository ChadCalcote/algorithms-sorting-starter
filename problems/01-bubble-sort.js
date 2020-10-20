// Implement Bubble Sort
// Convert unsorted data into sorted data
/*
Examples:
Conducting logical comparisons
Making Swaps while iterating
Making optimizations

*/


function swap(array, idx1, idx2) {
  let temp = array[idx1]; // 1
  array[idx1] = array[idx2]; // 1 => 4 array = [4, 2, 3, 4, 5]
  array[idx2] = temp; // 4 => 1 array = [4, 2, 3, 1, 5]
}



function bubbleSort(array) { // [3, 0, 2, 5, -1, 4, 1]
  for (let i = 0; i < array.length; i++) { // 2
    for (let j = 0; j < array.length - i; j++) { // -1, 0, 1, 2, 3, 4, 5
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
  }
  return array;
}
console.log(bubbleSort([3, 0, 2, 5, -1, 4, 1]));

module.exports = {
  bubbleSort,
  swap
};
