//Toán tử, toán hạng, biểu thức, câu lệnh, khối lệnh
//1. Toán tử số học: +, -, *, /, %
var num1, num2;
//Gán giá trị
num1 = 12;
num2 = 25;

//Thực hiện các phép tính toán số học
res = num1 * num2;
console.log(num1, "*", num2, "=", res);
res = num1 / num2;
console.log(num1, "/", num2, "=", res);
res = num1 + num2;
console.log(num1, "+", num2, "=", res);
res = num1 - num2;
console.log(num1, "-", num2, "=", res);
res = num2 % num1;
console.log(num2, "%", num1, "=", res);

//2. Phép toán so sánh => trả về giá trị kiểu boolean (True/False)
// >; >=; <; <=; ==; ===; !=; !==

//Thực hiện các phép tính toán số học
res = num1 > num2;
console.log(num1, ">", num2, "=>", res);
res = num1 >= num2;
console.log(num1, ">=", num2, "=>", res);
res = num1 < num2;
console.log(num1, "<", num2, "=>", res);
res = num1 <= num2;
console.log(num1, "<=", num2, "=>", res);
res = num1 == num2;
console.log(num2, "==", num1, "=>", res);
res = num1 === num2;
console.log(num2, "===", num1, "=>", res);
res = num1 != num2;
console.log(num2, "!=", num1, "=>", res);
res = num1 !== num2;
console.log(num2, "!==", num1, "=>", res);

num1 = 12;
num2 = "12";
res = num1 == num2;
console.log(num2, "==", num1, "=>", res);
res = num1 === num2;
console.log(num2, "===", num1, "=>", res);

//3. Toán tử logic - hệ thập phân
// &&(AND); ||(OR); !(NOT)
num1 = 12;
num2 = 15;

res = (num1>10) && (num2<10);
console.log("(num1>10) && (num2<10)", res);
res = (num1>10) || (num2<10);
console.log("(num1>10) || (num2<10)", res);
res = !((num1>10) || (num2<10));
console.log("!((num1>10) || (num2<10))", res);
res = !(num1>10) || (num2<10);
console.log("!(num1>10) || (num2<10)", res);
res = (num1>10) || !(num2<10);
console.log("(num1>10) || !(num2<10)", res);

//4. Toán tử đặc biệt
res = (num1 > 10) ? "Gía trị lớn hơn":"Giá trị nhỏ hơn";
console.log(res);
res = (num2 % 2 == 0) ? "Số chẵn":"Số lẻ";
console.log(num2, "là" , res);

// typeof
res = typeof(num1); //number
console.log("typeof(num1):", res);

num1 = "12345";
res = typeof(num1); //string
console.log("typeof(num1):", res);


