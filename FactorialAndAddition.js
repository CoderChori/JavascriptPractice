let sum=0;
let n = prompt("enter number for sum:");
n = Number.parseInt(n);
for(let i=0; i<n; i++)
{
  sum += i+1;
  console.log((i+1)+ " +");
}
console.log(sum);
// Factorial logic//
let factor = 1;
for(let i=0; i<n; i++)
  {
    factor = factor*(n-i);
  }
console.log(factor);