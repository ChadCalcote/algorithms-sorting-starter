// Implement Insertion Sort

function insertionSort(list) { // [5, 2, 4, 6, 1, 3]
    // let firstEl = list[0];
  for (i = 1; i < list.length; i++) { // 
    let currentNum = list[i]; //
    for (j = i - 1; j >= 0 && currentNum < list[j]; j--) {
      list[j + 1] = list[j];
    }
    list[j + 1] = currentNum;
  }
  return list;
}

// [1, 2, 3, 4, 5, 6]

module.exports = {
  insertionSort
};
