/*
Input: Nhập vào số có hai chữ số ab

giải thuật: a = a / 10; b = b % 10;

Output: tổng = a + b


*/

var ab = 56;

ten = Math.floor(ab / 10);
unit = ab % 10;

sumAB = ten + unit;
console.log("tổng 2 ký số của 56 là: " + sumAB);