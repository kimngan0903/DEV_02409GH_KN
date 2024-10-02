const hour = new Date().getHours();
let greeting;
if(hour<18) {
    greeting = "GoodDay";
}else {
    greeting = "Good Evening";
}
document.getElementById("demo").innerHTML = greeting;