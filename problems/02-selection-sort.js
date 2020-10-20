// Implement Selection Sort

// Implement swap without looking at bubble sort
function swap(arr, index1, index2) {
  let newArr = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = newArr;
}
let arr1 = [1,2,3,4,5,8,9];
swap(arr1, 0, 1);
console.log(arr1);

function selectionSort(list) { // [3,2,1]
  for (let i = 0; i < list.length; i++) { // i = 3
    for (let j = i + 1; j < list.length; j++) { // j = 2
      let min = list[i]; // min = 3
      if (list[j] < min) { // If 2 is less than 3 
        swap(list, i, j); // [2, 3, 1]
      }
    }
  }
}

module.exports = {
  selectionSort,
  swap
};
