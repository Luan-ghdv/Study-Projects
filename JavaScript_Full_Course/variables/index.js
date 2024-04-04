// A variable is a container for storing data
// A variable behaves as if it was the value that is contains

// Two steps:
// 1. Declaration (var, let, const)
// 2. Assignment (= assgnment operator)

let firstName = "Matheus"; //strings
let age = 28; //numbers
let student = true; //booleans

age = age + 1

console.log("Hello", firstName);
console.log("You are", age, "years old");
console.log("Enrolled: ", student);

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are " + age + " years old";
document.getElementById("p3").innerHTML = "Enrolled: " + student;