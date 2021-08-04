function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  return total;
}

// The only thing that impacts the space complexity is the assignments for variable total and initializatios for the loop
// Since it's primitive types, it means we have O(1) in space
