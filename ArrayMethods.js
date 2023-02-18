let a = [1, 2, 3, 5, 6, 54, 44];
// array to string 
console.log(a.toString());
// Join Array elements 
console.log(a.join(" And "));
// Pop element from array
console.log(a.pop());
console.log(a);
// Push new element in the array
console.log(a.push(96));
console.log(a);
// Removing first element
console.log(a.shift());
console.log(a);
// Unshifting the element 
console.log(a.unshift(8));
console.log(a);
// Delete element from array
delete a[0];
console.log(a);
// concat arrays
let a1 = [1,2,3,4];
let b2 = [5,6,7,8];
let c = b2.concat(a1);
console.log(c);
// Array sorting 
console.log(c.sort());
// Splice: we can add new element to array 
console.log(a1.splice(2,2, 23, 24));
console.log(a1);
// slice out element from array
console.log(a1.slice(1,3));
// reversing the element 
console.log(a1.reverse());