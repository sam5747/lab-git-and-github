//Challenge 1: Store the user's first name, last name, age, country, and state in your browser's localStorage using the setItem() method and print the localStorage in the console.
localStorage.setItem('firstName', 'John');
localStorage.setItem('lastName', 'Doe');
localStorage.setItem('age', '30');
localStorage.setItem('country', 'United States');
localStorage.setItem('state', 'California');
console.log(localStorage);
//Challenge 2: Get the users data stored on your browser's localStorage using the getItem() method and print the localStorage in the console.
const firstName = localStorage.getItem('firstName');
const lastName = localStorage.getItem('lastName');
const age = localStorage.getItem('age');
const country = localStorage.getItem('country');
const state = localStorage.getItem('state');
console.log(firstName, lastName, age, country, state);
//Challenge 3: Using removeItem() method, remove the "state" data stored in your browser's localStorage and print the localStorage in the console.
localStorage.removeItem('state');
console.log(localStorage);
//Challenge 4: Using clear() method to remove all the data stored in your browser's localStorage and print the localStorage in the console.
localStorage.clear();
console.log(localStorage);
//Challenge 5: Using JSON.stringify() convert the given object into the string and print the same.
const user = {
  firstName: 'Rajat',
  age: 25,
  skills: ['HTML', 'CSS', 'JS', 'React'],
};
const userString = JSON.stringify(user);
console.log(userString);
