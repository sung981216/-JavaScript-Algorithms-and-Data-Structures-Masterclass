function double(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
}

// Since we are pushing the elements to the array that is dependent on the array of the input, it is O(n) space!
