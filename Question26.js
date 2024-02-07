// temporary variable.

// Input Description:
// A single line containing a string.

// Output Description:
// Print the reversed string.

// Sample Input :
// GUVI
// Sample Output :
// IVUG


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
  const str = userInput[0];
  let res = ''
  let n=str.length;
  for (let i = n-1 ; i>=0 ; i--){
     res += str[i];
  }
  console.log(res);

  //end-here
});