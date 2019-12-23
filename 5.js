// Write a function strReverse to reverse a given string.

function strReverse(str)
{
    
    let str1=str.split('');
    let str2=str1.reverse().join('');
    console.log(str ,"is reversed to",str2);
}
strReverse('awesome');