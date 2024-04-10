// Question-1: Hello Variable

let greeting = "Salam World!";

console.log(greeting);

// Question-2: Basic Math

let a = 2;
let b = 10;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

// Question-3: Swapping Values

let c = 7;
let d = 8;

console.log("Before Swapping Values." + " c = ", c, " , and d = ", d, " .");

c++;
d--;
console.log("After Swapping Values." + " c = ", c, " , and d = ", d, " .");

// Question-4: Type Annotation (TypeScript)

let message: string = "how are you?";

// message = 1&

console.log(message);

// Question-5: Modulus Operator

let _x: number = 10;
let _y: number = 20;
let _z = _x % _y;

console.log(_z);

// Question-6: Increment Challenge

let o = 0;
console.log("Before Increment o = ", o);
o++;

console.log("After Increment o = ", o);

// Question-7: Logical Gates

let p = true;
let q = false;
let r = true;

console.log(p && p); // true
console.log(p && q); // false
console.log(p && r); // true
console.log(q && r); // false
console.log(p || q); // true
console.log(p || r); //true
console.log(q || r); //true
console.log(q || q); //false
console.log(!p); //false
console.log(!q); //true
console.log(!r); //false

console.log(p && q && r);
console.log(p || q || r);

// Question-8: Compound Assignment

let s = 10;

s += 5;
console.log(s); //now the new assigned value of s = 15.

s -= 5;
console.log(s); //now the new assigned value of s = 10.

s *= 5;
console.log(s); //now the new assigned value of s = 50.

s /= 5;
console.log(s); //now the new assigned value of s = 10.

// Question-9: Even or Odd

let u = 23;

if (u % 2 == 0) {
  console.log("Number is Even");
} else {
  console.log("Number is Odd");
}

// Question-10: Voting Eligibility

let age = 50;

if (age >= 18) {
  console.log("Eligible to Vote");
} else {
  console.log("Not Eligible to Vote");
}

// Question-11: Grading System

let marks = 19;

if (marks >= 180) {
  console.log("Grade A");
} else if (marks < 180 && marks >= 140) {
  console.log("Grade B");
} else if (marks < 140 && marks >= 100) {
  console.log("Grade C");
} else if (marks < 100 && marks >= 60) {
  console.log("Grade D");
} else if (marks < 60 && marks >= 20) {
  console.log("Grade E");
} else {
  console.log("Grade F");
}

// Question-12: Max of Three

let x = 111;
let y = 257;
let z = 171;

let max;

if (x > y && x > z) {
  max = x;
} else if (y > x && y > z) {
  max = y;
} else {
  max = z;
}

console.log("The maximum of", x, ",", y, ", and", z, "is:", max);

// Question-13: Leap Year Checker

let year = 2021;

if (year % 4 == 0) {
  console.log(year, " is a Leap Year.");
} else {
  console.log(year, " is not a Leap Year.");
}

// Question-14: Fahrenheit to Celsius Converter

let fahrenheit = 98.6;

let celsius = (5 / 9) * (fahrenheit - 32);

console.log(
  fahrenheit,
  "°F is equal to ",
  celsius,
  "°C" + ". The normal Human Body temperature."
);

// Question-15: Positive, Negative, or Zero

let numb = -8;
// numb = 10;
// numb = 0;

if (numb > 0) {
  console.log("Positive");
} else if (numb < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

// Question-16: Multiplication Table

let num = 3;
let i = 1;

console.log(num, "x" + i, "=", num * i++);
console.log(num, "x" + i, "=", num * i++);
console.log(num, "x" + i, "=", num * i++);
console.log(num, "x" + i, "=", num * i++);
console.log(num, "x" + i, "=", num * i++);
console.log(num, "x" + i, "=", num * i++);
console.log(num, "x" + i, "=", num * i++);
console.log(num, "x" + i, "=", num * i++);
console.log(num, "x" + i, "=", num * i++);
console.log(num, "x" + i, "=", num * i++);
