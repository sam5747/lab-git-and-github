const nameContainer = document.getElementById('name-container');
const ageContainer = document.getElementById('age-container');
const myName = "Sam";
nameContainer.innerHTML = myName; 
var myAge = 25;
 ageContainer.innerHTML = myAge;
 
// Variable names cannot start with a digit.
const firstQuestion = "This is the first debugging question. If you fix this question, you will be able to see this text on your console";
console.log(firstQuestion);

// Variable names cannot start with a special character like '#'.
const secondQuestion = "This is the second debugging question, if you fix this question you will be able to see this text on your console";
console.log(secondQuestion);

// Variable names are case-sensitive.
const thirdQuestion = "This is the third debugging question, if you fix this question you will be able to see this text on your console";
console.log(thirdQuestion); // 'thirdQuestion' should be the same in declaration and log.

// Variable names should be consistent in their casing.
const fourthQuestion = "This is the fourth debugging question, if you fix this question you will be able to see this text on your console";
console.log(fourthQuestion); // '_fourthquestion' should be '_fourthQuestion' to match the declaration.

// Hyphens are not allowed in variable names, use camelCase or underscores.
const fifthQuestion = "This is the fifth debugging question, if you fix this question you will be able to see this text on your console";
console.log(fifthQuestion); // 'fifth-question' should be 'fifthQuestion'.
