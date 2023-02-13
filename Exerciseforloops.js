// Marks of student using for (normal) loop
let marks={
    Physics:70,
    English: 80,
    Maths: 90, 
    Biology: 50
  }
  for (let i=0; i< Object.keys(marks).length;i++) {
    console.log("Marks in " + Object.keys(marks)[i] + " is " + marks[Object.keys(marks)[i]]);
  }
  // Marks of students using for in loop
  for(let a in marks)
    {
      console.log("Marks in "+ a + " is " + marks[a]);
    }