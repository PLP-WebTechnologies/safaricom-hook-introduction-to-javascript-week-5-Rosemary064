// Part 1: JavaScript Basics
// Variables and Data Types

// Declare variables of different types
let name = "John Doe";  // String
let age = 25;           // Number
let isStudent = true;   // Boolean
let hobbies = ["Reading", "Coding", "Travelling"];  // Array
let person = {          // Object
  name: "John",
  age: 25,
  isStudent: true
};

// Log values and types
console.log("Name:", name, "(Type:", typeof name + ")");
console.log("Age:", age, "(Type:", typeof age + ")");
console.log("Is student:", isStudent, "(Type:", typeof isStudent + ")");
console.log("Hobbies:", hobbies, "(Type:", typeof hobbies + ")");
console.log("Person:", person, "(Type:", typeof person + ")");

// Operators

// Simple Calculator Function
function calculator() {
  let num1 = prompt("Enter the first number:");
  let num2 = prompt("Enter the second number:");
  let operation = prompt("Choose an operation (+, -, *, /):");

  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  if (isNaN(num1) || isNaN(num2)) {
    alert("Invalid input! Please enter numbers.");
    return;
  }

  let result;
  switch (operation) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      alert("Invalid operation!");
      return;
  }
  alert("Result: " + result);
}

// Functions

// Greet User Function
function greetUser(name) {
  return "Hello, " + name + "!";
}

// Display greeting on webpage
let greetingMessage = greetUser("John");
document.getElementById("dynamic-content").innerHTML = "<p>" + greetingMessage + "</p>";

// Part 2: JavaScript Control Structures
// If Statements

// Ask user for age
let ageForVoting = prompt("Please enter your age to check voting eligibility:");
ageForVoting = parseInt(ageForVoting);

// Check if eligible to vote
let votingMessage = (ageForVoting >= 18) ? "You are eligible to vote." : "You are not eligible to vote.";
document.getElementById("dynamic-content").innerHTML += "<p>" + votingMessage + "</p>";

// Loops

// Display numbers from 1 to 10
let numbersList = "<ol>";
for (let i = 1; i <= 10; i++) {
  numbersList += "<li>" + i + "</li>";
}
numbersList += "</ol>";
document.getElementById("dynamic-content").innerHTML += numbersList;

// Part 3: Introduction to the DOM
// Selecting and Modifying HTML Elements

// Change the text of <h1> element
document.querySelector("h1").textContent = "JavaScript in Action!";

// Add new <p> inside the dynamic-content <div>
let newParagraph = document.createElement("p");
newParagraph.textContent = "This content was added dynamically using JavaScript.";
document.getElementById("dynamic-content").appendChild(newParagraph);
