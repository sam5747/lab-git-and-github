var x = 5;
var y = 2;
console.log(x + y);  // Output: 7

console.log(x - y);  // Output: 3

console.log(x * y);  // Output: 10

console.log(x / y);  // Output: 2.5

console.log(x % y);  // Output: 1 (remainder of the division of x by y)

var z = 20;
console.log(x ** y);  // Output: 25 (x to the power of y)

z--;
console.log(z);  // Output: 19

var a = 20;

var b = 10;

var c = 15;

var d = 20;
a += 10;
console.log(a);  // Output: 30 (20 + 10)

b -= 5;
console.log(b);  // Output: 5 (10 - 5)

c *= 2;
console.log(c);  // Output: 30 (15 * 2)

d /= 2;
console.log(d);  // Output: 10 (20 / 2)

console.log(a === 30);  // Output: true (a is strictly equal to 30)
console.log(a === "30");  // Output: false (a is not strictly equal to string "30")

console.log(a !== 25);  // Output: true (a is strictly not equal to 25)
console.log(a !== 30);  // Output: false (a is strictly equal to 30)

console.log(y < x);  // Output: true (2 is less than 5)
console.log(x < y);  // Output: false (5 is not less than 2)

console.log(x > y);  // Output: true (5 is greater than 2)
console.log(y > x);  // Output: false (2 is not greater than 5)

console.log(y <= 2);  // Output: true (2 is less than or equal to 2)
console.log(x <= 2);  // Output: false (5 is not less than or equal to 2)

console.log(x >= 5);  // Output: true (5 is greater than or equal to 5)
console.log(y >= 5);  // Output: false (2 is not greater than or equal to 5)
