// Write a code get an integer number as input and print the sum of the digits.

// Input Description:
// A single line containing an integer.

// Output Description:
// Print the sum of the digits of the integer.

// Sample Input :
// 124
// Sample Output :
// 7   


// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 
const strnum = userInput[0];
 let result = 0;
for ( i = 0 ; i < strnum.length ; i++){
    result = result + Number(strnum[i]);
}
console.log(result);
  //end-here
});