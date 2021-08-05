// Write a function which takes in a string and returns counts of each character in the string

// version 1

// function charCount(str) {
//   // make object to return at end
//   let result = {};
//   // loop over string, for each character...
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i].toLowerCase();
//     if (/[a-z0-9]/.test(char)) {
//       // if the char is a number/letter AND is a key in object, add one to count
//       if (result[char] > 0) {
//         result[char]++;
//       }
//       // if the char is a number/letter AND not in object, add it and set value to 1
//       else {
//         result[char] = 1;
//       }
//     }
//   }
//   return result;

//   // if character is something else (space, period, etc.) don't do anything
//   // return object at end
// }

// refactor version 1

function charCount(str) {
  // make object to return at end
  let result = {};
  // loop over string, for each character...
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      // if the char is a number/letter AND is a key in object, add one to count
      result[char] = ++result[char] || 1;
    }
  }
  return result;

  // if character is something else (space, period, etc.) don't do anything
  // return object at end
}
