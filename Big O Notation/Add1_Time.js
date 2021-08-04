function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

let startTime = performance.now();
addUpTo(100000000);
let finishTime = performance.now();

console.log(`It took: ${(finishTime - startTime) / 1000} seconds`);
