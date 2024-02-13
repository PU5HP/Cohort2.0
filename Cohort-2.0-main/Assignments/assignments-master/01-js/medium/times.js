/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/
function myFunction() {
    // Your code here
    let a =0;
    for (let i = 0; i < 100000000000; i++) {
      // Some computation or task
      a++;
    }
  }
  
  // Measure the time taken by myFunction
  const startTime = performance.now();
  myFunction();
  const endTime = performance.now();
  
  // Calculate the elapsed time
  const elapsedTime = endTime - startTime;
  
  console.log(`myFunction took ${elapsedTime} milliseconds to complete.`);