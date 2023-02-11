let a = prompt("What's your age??");
a = Number.parseInt(a);
if (a<0)
{
  alert("Invalid Age Input");
}
else if(a<9)
{
 alert("You are kid, Don't even think of driving");
}
else if(a>9 && a<18)
{
 alert("You are kid, you can start driving after 18");
}
else 
{
  alert("You can drive as you are 18 now");

console.log("You can", a<18? "Not Drive": "Drive");

