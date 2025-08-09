let num1 = Number.parseInt(prompt("Enter first number"));
let num2 = Number.parseInt(prompt("Enter second number"));

if (num1 > num2) {
    console.log("First number is largest");
} else if (num2 > num1) {
    console.log("Second number is largest");
} else {
    console.log("Both numbers are equal");
}
