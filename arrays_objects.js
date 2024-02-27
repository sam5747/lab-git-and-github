// Challenge 1
const strings = ['dog', 'by', 'cat', 'camping', 'large', 'flower', 'rabbit'];
const filteredStrings = strings.filter((str) => str.length >= 5);
console.log(filteredStrings);

// Challenge 2
const numbers = ['45', '55', '65', '75', '85'];
const squares = numbers.map((num) => Math.pow(parseInt(num), 2));
console.log(squares);

// Challenge 3
const alphabets = ['K', 'a', 'l', 'v', 'i', 'u', 'm'];
const concatenatedString = alphabets.reduce((acc, curr) => acc + curr, '');
console.log(concatenatedString);

// Challenge 4
const number = [1, 2, 3, 4, 5];
const firstEvenNumber = number.find((num) => num % 2 === 0);
console.log(firstEvenNumber);

// Challenge 5
const ranks = [1, 5, 7, 8, 10, 7];
const indexOfSeven = ranks.findIndex((num) => num === 7);
console.log(indexOfSeven);

// Challenge 6
const num = [2, 4, 6, 8];
num.forEach((value, index) => console.log(index + ':' + value));

// Challenge 7
const marks = [35, 66, 25, 85, 75, 45];
const hasLessThan45 = marks.some((mark) => mark < 45);
console.log(hasLessThan45);

// Challenge 8
const positive = [2, 3, 4, -1];
const allPositive = positive.every((num) => num > 0);
console.log(allPositive);

// Challenge 9
const cars = [
  {
    name: 'Audi',
    color: ['black', 'red', 'grey'],
    capacity: 5,
  },
  {
    name: 'Hyundai',
    color: ['white', 'grey', 'black'],
    capacity: 5,
  },
  {
    name: 'Toyota',
    color: ['red', 'white', 'black'],
    capacity: 7,
  },
  {
    name: 'Renault',
    color: ['blue', 'silver', 'red'],
    capacity: 6,
  },
];
cars.forEach((car) =>
  console.log(`${car.name} ${car.color.join(' ')} ${car.capacity}`)
);

// Challenge 10
const person = {
  name: 'Ajay Kumar',
  age: 27,
  vehicles: {
    car: 'limousine',
    bike: 'ktm-duke',
    plane: 'lufthansa',
  },
  email: 'ajay@gmail.com',
  phoneno: 9978425555,
};
// 1. Delete the "phoneno" property from the object person.
delete person.phoneno;

// 2. Using the hasOwnProperty check whether the person object has the property "bike", "house".
const hasBike = person.hasOwnProperty('bike');
const hasHouse = person.hasOwnProperty('house');
console.log('Has Bike:', hasBike);
console.log('Has House:', hasHouse);

// 3. Using dot and bracket notation get the output as "Mr Ajay Kumar travels by plane called Air123".
const travelInfo = `${person.name} travels by ${person.vehicles['plane']} called ${person.vehicles.plane}`;
console.log(travelInfo);

// 4. Change the email property of person object to "ajaykumar@gmail.com".
person.email = 'ajaykumar@gmail.com';

// 5. Generate an array of keys to the object person using object.keys() method.
const keys = Object.keys(person);
console.log(keys);
