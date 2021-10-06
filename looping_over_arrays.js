const amounts = [61.00, 52.25, 112.99, 5.00];

//traditional for loop method
// let total = 0;
// for (let i = 0; i < amounts.length;i++) {
//   total = total + amounts[i];
// } 
// console.log(total);

//Newer for..of Loops Are Simpler
const total = 0;
for (let amount of amounts) {
  total += amount;
} 
console.log(total);
// Here the amount variable is automatically set to each item in the array (first 61.00, then 52.25 and so on).

//Why, in your opinion, is this for..of loop the preferred way to loop over an entire array from start to end?

//Because with the for..of syntax, we don't have to start and manage an array index i and then use that index to access each item in the array (amounts[i]). We don't care about the index, we really just want to go through each item in the array.

//When might the for..of loop not be the appropriate choice?

//The for..of loop is only really useful for going from beginning to end of an array.If instead we need to loop through an array in a different order (e.g. backwards, or skipping every other element), then we'll need to use a traditional for loop instead.

//In summary, the for..of loop is ...
/*
A modern (newer) feature in JavaScript
Simpler than the regular for loop
But also less powerful than the regular for loop
Only really useful for going through an entire array from beginning to end
Not a solution to all our looping problems */