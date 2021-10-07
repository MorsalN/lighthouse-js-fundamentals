/* 

The function should return an empty array [] if given incorrect parameters, such as:

start, end, or step being undefined
start being greater than end
step being 0, or negative

*/
//ATTEPMT 1
// let array = [];

// function range(start,end,step) {
//   for (i = start; i <= end; i = i + 2) {
//     if (i > 0) {
//       if (start < end) {
//         if (step > 0) {
//           if (i !== undefined) {
//             start = range[0];
//             end = range[1];
//             step = range[2];
//             return array.push(start,end,step);
//           }
//         }
//       }
//       return array;
//     }
//   }
// }

// console.log(range(0,10,2));


//WORKING
function range(start,end,step){
  let result = [];
  for (i = start; i <= end; i = i + step) {
    result.push(i)
  } return result;
}
console.log(range(10,30,5));