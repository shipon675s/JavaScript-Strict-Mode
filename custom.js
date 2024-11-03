//! equal to
let x = 6;
let y = "6";
console.log(x == y);  

//! equal value and equal type
let l = 6;
let h = "6";
console.log(x === y);   

//! not equal
let v = 8;
let b = "9";
console.log(v != b); 

//! not equal value or not equal type
let a = 8;
let z = "9";
console.log(v !== b); 

//! greater than
x>5 

//! less than
x<5 

//! greater tahn or equal to
x>=5 

//! less than or equal to
x<=5 

let age = 25;
if(age >= 18) {
    console.log("You are adult!");
}; 

//! Logical Operators: && (and), ।। (or), !(not)

//! Conditional (Ternary) Operator
let agee = 18;
console.log(agee < 20 ? "You are adult!" : "You are not adult!");

//! Comparing Different Types
console.log(2<12);
console.log(2<"12");
console.log(2<"John");
console.log(2>"John");
console.log(2=="John");
console.log("2">"12");
console.log("2"=="12");