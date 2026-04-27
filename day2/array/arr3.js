// Student mark filtering
let students = [
    { name: "Loyd", marks: 85 },
    { name: "Rahul", marks: 40 },
    { name: "Neha", marks: 92 },
    { name: "Sara", marks: 35 }
];
let pass = students.filter((num) => num.marks >= 50)
console.log(pass)
/* 
[
  { name: "Aman", marks: 85 },
  { name: "Neha", marks: 92 }
] 
*/