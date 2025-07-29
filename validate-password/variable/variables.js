// {
//     var x = 10;
//     let y = 20;
//     const z = 30;
// }
// console.log(x);//10
// console.log(y);//error refranceeeror
// console.log(z);//referanceerror

// Q2. What is Hoisting? How does it work with var, let, const?
// Theory:

// JavaScript moves variable declarations to the top during execution (hoisting).

// For var, declaration is hoisted and initialized with undefined.

// For let and const, declaration is hoisted but kept in Temporal Dead Zone (TDZ) until the line of code is reached.
// pratical 
// console.log(a);
// var a = 10;
// // console.log(b);
// let b = 20;
// console.log(c);
// const c = 30;
// Q3. Can we modify a const object or array?
// Theory:

// You cannot reassign const variable, but if it’s an object or array, you can modify its content (mutability).
// const arr = [1, 2, 3];
// console.log(arr);
// arr.push(4);
// arr = [5, 6];
// let a = 10;
// {
//     var a = 20;
//     console.log(a);
// }

