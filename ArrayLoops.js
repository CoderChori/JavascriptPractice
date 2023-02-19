let number = [1, 2, 23, 25, 50, 100];
/*Basic for loop
for(let i=0; i<number.length;i++){
  console.log(number[i]);
}*/
// Here in forEach loop we have inserted one function
number.forEach((element) => {
  console.log(element*element);
})

// from any object to array
let name = "ANUSUMA";
console.log(Array.from(name));

// of loop
for (let i of number){
  console.log(i);
}
// in loop 
for (let i in number){
  console.log(i);
  console.log(number[i]);
}