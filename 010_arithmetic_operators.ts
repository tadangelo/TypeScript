// +, -, *, /, %, ++, --

var numOne : number = 1;
var numTwo : number = 2;

// addition

console.log("Addition:");
console.log(numOne + numTwo);

// subtraction

console.log("Subtraction:");
console.log(numOne - numTwo);

// multiplication

console.log("Multiplication:");
numOne = 10;
numTwo = 15;
console.log(numOne * numTwo);

// division

console.log("Division:");
console.log(numOne / numTwo);

// modulus

console.log("Modulus:");
var numThree : number = 2;
var numFour : number = 21;
console.log(numFour % numThree);

console.log("Modulus:");
var numThree : number = 2;
var numFour : number = 20;
console.log(numFour % numThree);

console.log("Modulus:");
var numThree : number = 5;
var numFour : number = 1237;
console.log(numFour % numThree);

// incrementor

console.log("Incrementor:");
var x : number = 0;

while (x < 10) {
  console.log(x);
  x++;
}


// decrementor

console.log("Decrementor:");
var x : number = 20;

while (x > 0) {
  console.log(x);
  x--;
}