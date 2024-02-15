// Challange 1: Create a for loop to print all the even numbers till 100 in the console.
for (let i = 2; i <= 100; i += 2) {
    console.log(i);
  }
// Challenge 2: Create a while loop to print all the odd numbers till 100 in the console.
  let a = 1;
while (a <= 100) {
  console.log(a);
  a += 2;
}
// Challenge 3: Create a do while loop to print all the multiples of 3 till 100 in the console.
let b = 3;
do {
  console.log(b);
  b += 3;
} while (b <= 100);
// Challenge 4: Create a for loop to print all the prime numbers till 100 in the console.
for (let num = 2; num <= 100; num++) {
    let isPrime = true;
    for (let c = 2; c <= Math.sqrt(num); c++) {
      if (num % c === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) console.log(num);
  }
  