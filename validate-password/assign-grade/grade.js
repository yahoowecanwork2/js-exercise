let student = Number.parseInt(prompt("Enter your score"))
if (student < 99 && student >= 90) {
    alert("A")
} else if (student < 89 && student >= 80) {
    alert("B")
} else if (student < 79 && student >= 70) {
    alert("C")
} else if (student < 69 && student >= 60) {
    alert("D")
} else if (student < 59 && student >= 50) {
    alert("E")
} else {
    alert("F")
}