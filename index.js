"use strict";
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
// Question-3: Swapping Values
let c = 7;
let d = 8;
c++;
d--;
console.log(c);
console.log(d);
// Question-4: Type Annotation (TypeScript)
let message = "how are you?";
// message = 10;
console.log(message);
// Question-5: Modulus Operator
let x = 10;
let y = 20;
let z = x % y;
console.log(z);
// Question-6: Increment Challenge
let o = 0;
o++;
console.log(o);
// Question-7: Logical Gates
let p = true;
let q = false;
let r = true;
console.log(p && q && r);
console.log(p || q || r);
console.log(!p);
console.log(!q);
console.log(!r);
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
}
else {
    console.log("Number is Odd");
}
// Question-10: Voting Eligibility
let age = 10;
if (age >= 18) {
    console.log("Eligible to Vote");
}
else {
    console.log("Not Eligible to Vote");
}
