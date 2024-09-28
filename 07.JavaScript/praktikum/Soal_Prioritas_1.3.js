function findLargest(arr) {
  let largest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  return largest;
}

console.log(findLargest([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(findLargest([2, 5, 8, 6, 1, 4, 0, 3]));
console.log(findLargest(["f", "t", "c", "v"]));
