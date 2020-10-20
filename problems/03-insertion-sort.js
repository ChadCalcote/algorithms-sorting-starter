// Implement Insertion Sort

function insertionSort(list) { // [5, 2, 4, 6, 1, 3]
    // let firstEl = list[0];
  for (i = 1; i < list.length; i++) { // i = 2
    let currentNum = list[i]; // currentNum = i = 2
    for (j = i - 1; j >= 0 && currentNum < list[j]; j--) { // j = 0, 0 = 5, iterate backwards
      list[j + 1] = list[j]; // j(5) moves to the 2nd spot in the array [2,4,6.1,3] [5, 6]
    }
    list[j + 1] = currentNum;
  }
  return list;
}

// [1, 2, 3, 4, 5, 6]

module.exports = {
  insertionSort
};
