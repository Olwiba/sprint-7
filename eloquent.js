// Exercise 1: Minimum

//Find the minimum number from a given set of numers
function min(a , b){
 var numbers = Math.min(a, b);
 return numbers; 
}
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

// Exercise 2: Recursion

//Find out if a number is even and return true, returns false if the number is odd
function isEven(num){

//If the given number if negative we will convert it to a positive
  if (num < 0){
    num = num * -1;
  }
  var check = num % 2;
  if (check == 1){
    return false;
  } else if (check == 0){
    return true;
  }
}
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??

// Exercise 3: Bean counting

// Count the amount of Bs in a string
function countBs(string){
 var bCount = 0;
 for (i=0; i < string.length; i++){
   if (string.charAt(i) == "B"){
     bCount++;
   }
 }
  return bCount;
}

// Count the amount of any given letter in string
function countChar(string, letter){
 var letterCount = 0;
 for (i=0; i < string.length; i++){
   if (string.charAt(i) == letter){
     letterCount++;
   }
 }
  return letterCount;
}
console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
