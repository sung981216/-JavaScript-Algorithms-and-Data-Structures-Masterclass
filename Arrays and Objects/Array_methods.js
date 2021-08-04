var array1 = ["a", "b", "c"];
var array2 = ["d", "e", "f"];

console.log(array1.concat(array2));

// expected output: Array ['a', 'b', 'c', 'd', 'e', 'f']
// since the size of the arrays is dependent on the performance, the Big O is O(n)

var animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animals.slice(2));
// output:['camel', 'duck', 'elephant']

console.log(animals.slice(2, 4));
// output:['camel', 'duck']

console.log(animals.slice(1, 5));
// output:['bison', 'camel', 'duck', 'elephant']

const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, "May");
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]
