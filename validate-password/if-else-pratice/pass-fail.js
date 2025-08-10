let num = 50;
let student = num >= 33 ? "pass" : "fail";
console.log(student);

if ([]) {
    console.log("True");
} else {
    console.log("False");
}
// output:true

if ({} == false) {
    console.log("Yes");
} else {
    console.log("No");
}
//output:no


if (NaN) {
    console.log("True");
} else {
    console.log("False");
}
// output:answer is false
if (null == undefined) {
    console.log("Equal");
} else {
    console.log("Not equal");
}
// output :answer is Not equal