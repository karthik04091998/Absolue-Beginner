//  You will be provided with a number. Print the number of days in the month corresponding to that number.

//  Note: In case the input is February, print 28 days. If the Input is not in valid range print "Error".

//  Input Description:
//  The input is in the form of a number.

//  Output Description:
//  Find the days in the month corresponding to the input number. Print Error if the input is not in a valid range.

//  Sample Input :
//  8
//  Sample Output :
//  31


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
  const N= +userInput[0];
   
   if (N == 1 || N == 3 || N == 5
        || N == 7 || N == 8 || N == 10
        || N == 12) {
        console.log("31");
    }
  
    // Check for 30 Days
    else if (N == 4 || N == 6
             || N == 9 || N == 11) {
        console.log("30");
    }
  
    // Check for 28/29 Days
    else if (N == 2) {
        console.log("28");
    }
  
    // Else Invalid Input
    else {
        console.log("Error");
    }

  //end-here
});