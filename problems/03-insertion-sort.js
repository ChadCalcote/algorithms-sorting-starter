// Implement Insertion Sort

function insertionSort(list) {
  // let firstEl = list[0];
  for (let i = 1; i < list.length; i++) {
    for (let j = i + 1; j >= 0; j--) {

    }
    if (list[i] < list[i - 1]) {
      list[i - 1] = list[i];
    }
  }
  return list;
}

module.exports = {
  insertionSort
};
