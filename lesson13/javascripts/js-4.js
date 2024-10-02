// Cấu trúc điều khiển if
// Dạng 1: If đơn
/*
    Cú pháp:
    if(condition-expression) {
        block statement;
    }
*/
// Ví dụ: cho số num, kiểm tra số num có là số dương?
num = 10;
if (num > 0) {
    console.log(num, "là số dương");
}

// Nếu num>0 thì gán lại giá trị num=-100
if (num > 0) {
    num = -100;
    console.log(num); 
}

// Dạng 2: if ... else
num = 13;
// Kiểm tra xem số num là số chẵn hay số lẻ
if (num %2 ==0) {
    console.log(num, "là số chẵn");
} else {
    console.log(num, "là số lẻ");
}

// Dạng 3: if bậc thang if ... else if ...
// Kiểm tra số num là số dương, âm hay số 0
num = -11;
if (num > 0) {
    console.log(num, "là số dương");
}else if (num < 0) {
    console.log(num, "là số âm");
}else {
    console.log(num, "là số 0");
}

// Dạng 4: nested if
num1 = 12;
num2 = 15;
// Nếu num1 là số chẵn, kiểm tra nếu num2 là số lẻ
// thì tính: res = num1 + num2
if (num1 % 2 == 0) {
    if(num2 % 2 ==1) {
        res = num1 + num2;
        console.log(res);  
    }
}else {
    if(num2 % 2 ==1) {
    res = num1 - num2;
    console.log(res);  
    }
}

// Luyện tập 1: Giải phương trình bậc 1: ax+b=0
a = 3;
b = 9;
if (a == 0 && b == 0){
    console.log('Phương trình vô số nghiệm');
}else if (a != 0 && b == 0){
    console.log('Phương trình có nghiệm x = 0');
}
else if (a == 0 && b != 0){
    console.log("Phương trình vô nghiệm");
}
else {
    console.log('Phương trình có nghiệm x = ' + (-b/a));
}
// Luyện tập 2: Giải phương trình bậc 2: ax^2+bx+c=0
a = 1;
b = 5;
c = 2;
delta = b*b - 4*a*c;
if (delta < 0) {
    console.log(" Phương trình vô nghiệm ");
}else if (delta == 0) {
    x = -b/2*a;
    console.log("Phuơng trình có nghiệm kép:x1=x2=", x);
}else {
    x1 = (-b + Math.sqrt(delta))/(2*a);
    console.log("Phương trình có nghiệm x1=", x1)
    x2 = (-b - Math.sqrt(delta))/(2*a);
    console.log("Phương trình có nghiệm x2=", x2)
}