const part1 = "I am a";
const part2 = "Kalvian";
const combinedString = part1 + " " + part2;
console.log(combinedString);  // Output: "I am a Kalvian"

const motivationalQuote = 'If you fail, never give up because FAIL means "First Attempt In Learning".';
console.log(motivationalQuote);

const someString = "Find my length";
console.log(someString.length);  // Outputs the length of the string

const lowerCaseString = "i need to be uppercase";
const upperCaseString = lowerCaseString.toUpperCase();
console.log(upperCaseString);

const loveProgramming = "I love programming";
const loveJavaScript = loveProgramming.replace("programming", "JavaScript programming");
console.log(loveJavaScript);  // Output: "I love JavaScript programming"

const repeatString = "Repeat me! ";
console.log(repeatString.repeat(3));  // Output: "Repeat me! Repeat me! Repeat me! "

const kalvianString = "I am a Kalvian";
const kalvianArray = kalvianString.split(" ");  // Splits the string into an array by spaces
console.log(kalvianArray);  // Outputs the array

const timeString = "Time and Tide wait for none";
const indexTi = timeString.indexOf("Ti");
console.log(indexTi);  // Outputs the index of "Ti" in the string

const lemonString = "When life gives you lemons make lemonade";
const hasLemon = lemonString.includes("lemon");
console.log(hasLemon);  // Outputs true if "lemon" is found in the string


const changeWorldString = "You must be the change you wish to see in the world.";
const changeWord = changeWorldString.slice(16,22);
console.log(changeWord);  // Output: "change"

const worldWord = changeWorldString.substring(46,55);
console.log(worldWord);  // Output: "world"
