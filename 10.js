// Write a function sort that sorts a given array into ascending order.
// You cannot use the inbuilt ’.sort’ JS function.

let numbers = [5,2,1,4,3];

function Sort(array) {
    var done = false;
    while (!done) {
      done = true;
      for (let i = 1; i < array.length; i++) {
        if (array[i - 1] > array[i]) {
          done = false;
          let temp = array[i - 1];
          array[i - 1] = array[i];
          array[i] = temp;
        }
      }
    }
  
    return array;
  }
  
  console.log(Sort(numbers));