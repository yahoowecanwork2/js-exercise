let day = prompt("enter a day");
switch (day) {
    case 1:
        day = "Monday"
        alert("monday")
        break;
    case 2:
        day = "tuesday"
        break;
    case 3:
        day = "wednesday"
        break;
    case 4:
        day = "Thursday"
        break;
    case 5:
        day = "Friday"
        break;
    case 6:
        day = "Saturday"
        break;
    case 7:
        day = "Sunday"
        break;

    default:
        break;
}
alert("today is", day);