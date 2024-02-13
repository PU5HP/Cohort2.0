/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let lstr = str.toLowerCase();//1
    let ans = 0;
    for(let i=0;i<str.length;i++){
      if(lstr[i]=='a' || lstr[i]=='e' || lstr[i]=='i' || lstr[i]=='o' || lstr[i]=='u'){
        ans++;
      }
    }
    return ans;
}

module.exports = countVowels;