/*
 * Bubble sort is the most basic sorting algorithm.
 * It compares the first element of an array with the second element.
 * If the first element is greater than the second element then it swaps them.
 * Then it compares the second and third elements and swaps them if the second is larger.
 * Then it compares the third and fourth elements and does the same.
 * This continues and the the larger elements begin to "bubble" towards the end.
 * The loop then restarts and repeats this process until it makes a clean pass
 * without performing any swaps.
 *
 * Implement a function that takes an array and sorts it using this technique.
 * Don't use JavaScript's built-in sorting function (Array.prototype.sort).
 *
 * What's the time complexity of your algorithm?  Are there ways you can improve it?
 *
*/

/*
 * Example:
 * bubbleSort([2, 1, 3]); // returns [1, 2, 3]
 *
*/

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) { 
    for (let j = 0; j < arr.length - i - 1; j++) { // last i elements are already in place make the size of the search smaller.
      if (arr[j] > arr[j+1]) {
        let temp = arr[j]; // j is larger save it to temp
        arr[j] = arr[j+1]; // j + 1 is small so it need to go to was j was.
        arr[j+1] = temp; // temp has the value of j and since it is larger it needs to be moved one spot further down the array
      }
    }
  }
};
