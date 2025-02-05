let sum = 0;
const numbers = [
  4, 10, 14, 20, 28, 30, 36, 38, 46, 48,
  50, 54, 58, 62, 70, 72, 82, 88, 96, 100
];

function filterNumbers(numb) {
  console.log(numb)
  // console.log("This array has how many elements: ", numb.length)
    let new_array = [];
    let sum_of_array = 0;
  for (let i = 0; i < numb.length; i++){
    if (numb[i] >= 50) {
      new_array.push(numb[i]);
      sum_of_array = sum_of_array + numb[i]; 
      // console.log("The sum_of_array value is ", sum_of_array, " , and the numb[i] value is ", numb[i]);
     } else {
      
    }
  }
  return sum_of_array  
}
/* Finshed definitions */


/* Main Function */
let results_of_function = filterNumbers(numbers);
console.log("The sum of numbers >= 50 is: ",results_of_function);


