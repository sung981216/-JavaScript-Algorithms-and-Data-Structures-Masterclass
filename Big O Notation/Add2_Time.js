function addUpTo2(n) {
  return (n * (n + 1)) / 2;
}

console.log(addUpTo2(6));

let startTime = performance.now();
addUpTo(100000000);
let finishTime = performance.now();

console.log(`It took: ${(finishTime - startTime) / 1000} seconds`);
