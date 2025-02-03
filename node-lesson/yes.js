function my_func_multiplier(numb1, numb2){
    if (numb1 === undefined || numb2 === undefined){
        return "Error, you must provide two values."
    } if (isNaN(numb1) || isNaN(numb2) || numb1 === "" || numb2 === ""){
        throw new Error("Numb1 or Numb2 must be a number.");
    }
    return numb1 * numb2;
}
console.log(my_func_multiplier(2, 3));
console.log(my_func_multiplier(6));
console.log(my_func_multiplier(6, "3"));
console.log(my_func_multiplier(6, ""));
console.log(my_func_multiplier(6, "Whoops!"));