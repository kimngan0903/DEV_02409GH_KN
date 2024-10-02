const time = new Date().getHours();
let greeting;
if(time<10) {
    greeting = "GoodMorning";
}else if (time<20) {
    greeting = "GoodDay";
}else {
    greeting = "GoodEvening";
}
document.getElementById("demo").innerHTML = greeting;