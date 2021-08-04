function logAtLeast5(n) {
  for (let i = 1; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}

// Big O is O(1) since the most loops we can do is five times not n times
