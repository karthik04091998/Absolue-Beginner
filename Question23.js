// Write a code to get 2 integers as input and find the HCF of the 2 integer without using recursion or Euclidean algorithm.

// Input Description:
// A single line containing 2 integers separated by space.

// Output Description:
// Print the HCF of the integers.

// Sample Input :
// 2 3
// Sample Output :
// 1


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
  const inparr = userInput[0].split(" ");
  const num1 = +inparr[0];
  const num2 = +inparr[1];
  
  let minimum = num1;
  
  if (num1 > num2){
      minimum = num2;
  }
  let hcf = '';
  
  for (let i = 0; i<=minimum; i++){
       if( num1 % i === 0 && num2 % i === 0) {
        hcf = i;
    }
  }
  console.log(hcf);

  //end-here
});