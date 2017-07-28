/*
 * Implement three functions called multiply, divide, and modulo.
 * These functions should multiply, divide, or return the remainder of two arguments.
 * Now for the tricky part: you can only use the + and - operators to implement these functions.
 *
 */
const multiply = (num1, num2) => {
  let total = 0;
  for (i = 0; i < num2; i++) {
    total += num1;
  }
  return total;
}

const divide = (num1, num2) => {
  let total = num1;
  let count = 0;
  while (total >= num2) {
    total -= num2;
    count++;
  }
  return count;
}

const modulo = (num1, num2) => {
  let total = num1;
  let count = 0;
  let remainder = 0;
  while (total >= num2) {
    total -= num2
    if (total < num2) {
      return remainder = total;
    } else if (total === num2){
      return remainder = 0;
    }
  }
}

console.log(multiply(4,10));
console.log(divide(50,5));
console.log(modulo(12,5));
