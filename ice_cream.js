// Do not modify these first two lines
const iceCreamFlavours = ["chocolate", "vanilla", "cookies and cream", "rocky road", "strawberry"];
console.log(iceCreamFlavours);

//Add the flavour "root beer" to the array without modifying the original array. Then console.log the value of the entire array.

iceCreamFlavours.push('root beer');
console.log(iceCreamFlavours);

//grabbing first flavour
console.log(iceCreamFlavours[0]);

//grabbing last flavour 
console.log(iceCreamFlavours[iceCreamFlavours.length-1]);

//total number of flavours
console.log(iceCreamFlavours.length);