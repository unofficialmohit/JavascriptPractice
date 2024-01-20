const numbers=[4,-1,2,3];
let sum=0;
for(let n of numbers)
{
    sum = sum + n;
}
console.log(sum);
const sum2=numbers.reduce(function(accumulator,value){
    return accumulator+=value;

},0);   // if we dont initlize the accumulator then default values of accumulator will be first element and current value  is -1 
console.log(sum2);
const sum3=numbers.reduce((accumulator,value)=>accumulator+=value);  
console.log(sum3);
