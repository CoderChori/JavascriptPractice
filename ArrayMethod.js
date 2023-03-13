// Map Method
let arr = [8, 1, 18];
let a = arr.map((value, index, array) =>{
  console.log(value);
  return value+1;
})
console.log(a);
// Filter Method
let arr2 = [8, 1, 18, 0, 25, 56, 86, 7, 8, 6, 12];
let b = arr2.filter((a)=>{
 return a>10;
})
console.log(b);
// Array Reduce Method
let arr3 = [8, 1, 18, 0, 25, 56, 86, 7, 8, 6, 12];
let newarr3 = arr3.reduce((anu1, anu2)=>{
  return anu1+anu2;
})
console.log(newarr3);