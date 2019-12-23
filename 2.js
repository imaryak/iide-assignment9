// Write a function factorial that calculates the factorial of a positive integer. 

let factorial = (x) => { 

    if (x === 0)
   {
      return 1;
   }
    return x * factorial(x-1);
           
  }
let ans=factorial(3)
console.log(ans);