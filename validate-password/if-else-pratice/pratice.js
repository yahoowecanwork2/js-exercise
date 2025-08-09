//  Basic Output Questions
if (0) {
    console.log("hello");

} else {
    console.log("hey neha!!")
}
// output:hey neha!!(0 because it is falsy value)

if ("0") {
    console.log("hey");

} else {
    console.log("wrong");

}
//output:hey (beacuse 0 is non empty value)

//  Truthy / Falsy Confusion
if ([]) {
    console.log("yes");

} else {
    console.log("no");

}
// output: yes(beacuse empty arry is thruthy value)

if (null) {
    console.log("A");

} else if (undefined) {
    console.log("B");

} else {
    console.log("c");
}

//output : c (because null and undefined is falsy value)

// Loose vs Strict Equality
if (0 == false) {
    console.log("equal");

} else {
    console.log("not equal");
}
//output : equal (because ois convert into false which is equal to false and == dost not check any typeof)
if (0 === false) {
    console.log("equal");

} else {
    console.log("not equal");
}
// output :not equal
//  Ternary Operator Questions

let age = 18
let canVote = 18 >= age ? "vote" : "no";
console.log("yes u can vote")
// output :yes u can vote

let x = 0 ? "A" : 1 ? "B" : "C";
console.log(x);
// output:b

// Nested if-else Logic
let num = 15;
if (num % 3 === 0 && num % 5 === 0) {
    console.log("FizzBuzz");
} else if (num % 3 === 0) {
    console.log("Fizz");
} else if (num % 5 === 0) {
    console.log("Buzz");
} else {
    console.log(num);
}
// output:Fizzbuzz
//  Interview Tricky Examples
let a = "hello";
if (a.length - 5) {
    console.log("Yes");
} else {
    console.log("No");
}
// output :No(beacuse 5-5=0)
if ("false") {
    console.log("True branch");
} else {
    console.log("False branch");
}
// output: false
