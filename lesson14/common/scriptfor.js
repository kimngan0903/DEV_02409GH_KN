let text = "";
let i=0;
// for (let i=0; i<10; i++) {
//     text += "Đây là số " + i + "</br>"
// }
for (; i<10 ;) {
    text += "Đây là số " + i + "</br>"
    i++;
}
document.getElementById("demo").innerHTML = text;