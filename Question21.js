// You are given three numbers A, B & C. Print the largest amongst these three numbers.

// Input Description:
// Three numbers are provided to you.

// Output Description:
// Find and print the largest among the three

// Sample Input :
// 1
// 2
// 3
// Sample Output :
// 3  


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
 let num1 = +userInput[0];
 let num2 = +userInput[1];
 let num3 = +userInput[2];
 
 if (num1 < num2 && num2 < num3)
 {
    console.log(num3);
 }
 else if(num1 < num2 && num2 > num3){
     console.log(num2);
 }
  else{console.log(num1);
  }

      

  //end-here
});