// Question one: result of console.log("nor\"".length)
console.log("nor\"".length)
// Question two: Includes, StartWith and Endwith Functions 
let text = "Hello world, welcome to the universe.";
let result = text.includes("world", 4);
console.log(result);
// Question three: to lower case
let a = prompt("Enter a name:");
console.log(a.toLocaleLowerCase());

console.log(text.includes("Hello", 4));
console.log(a.startsWith("Enter"));
console.log(a.endsWith("name:"));

// Question four: Slice function
let b = "Please Give Rs 1000";
console.log(b.slice(15,19));
// Note: We cannot change any specific character in string