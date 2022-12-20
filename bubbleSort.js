
  /*jshint expr:true*/

/*
 * Bubble sort is the most basic sorting algorithm in all of Computer
 * Sciencedom. It works by starting at the first element of an array and
 * comparing it to the second element; if the first element is greater than the
 * second element, it swaps the two. It then compares the second to the third,
 * and the third to the fourth, and so on; in this way, the largest values
 * "bubble" to the end of the array. Once it gets to the end of the array, it
 * starts over and repeats the process until the array is sorted numerically.
 *
 * QUERY: What's the time complexity of your algorithm?
 *
 * Extra credit: Optimization time! During any given pass, if no elements are
 * swapped we can assume the list is sorted and can exit the function early.
 * After this optimization, what is the time complexity of your algorithm?
 *
 * Moar credits: Do you need to consider every element every time you iterate
 * through the array? Make it happen, boss. Again: Has the time complexity of
 * your algorithm changed?
*/

// input, outputs, constraints, space & time complexity
// sorted array is being built up from the right side
// quadratic (n^2) time complexity (essentially 2 for loops)


var bubbleSort = function(array) {
<<<<<<< HEAD
  for(var i = 0; i < array.length; i++){ 
    for(var j = 0; j <   array.length ; j++){
      if(array[j] > array[j+1]){
        var temp = array[j]
        array[j] = array[j + 1]
        array[j+1] = temp
=======
  var sorted = false;
  while (!sorted) {
    sorted = true;
    for (var i=0; i<array.length; i++) {
      if (array[i] > array[i+1]) {
        sorted = false;
        var temp = array[i];
        array[i] = array[i+1];
        array[i+1] = temp;
>>>>>>> 59fbe39ae30bd3d76251f9127c9a9f1f1f894c56
      }
    }
  }
  return array;
<<<<<<< HEAD
 }
  
  console.log(bubbleSort([4,3,2,1]));
=======
}

console.log(bubbleSort([4,3,2,1]));
>>>>>>> 59fbe39ae30bd3d76251f9127c9a9f1f1f894c56
