// Write a function digitsum that calculates the digit sum of an integer. The digit sum of an integer is the sum of all its digits. 

let digitsum = (num) => { 
    let start = 0;
    let sum = 0;
    let numString = num.toString(); 
    
    for (var i = start; i < numString.length; i++) {
        sum =sum+ Number(numString[i]);
    }
    return sum;
}
let ans=digitsum(192);
console.log(ans);