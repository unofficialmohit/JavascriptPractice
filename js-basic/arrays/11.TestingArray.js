const numbers=[1,2,3,4,-4,-0];
const allPostive = numbers.every(function(value){
    return value>=0;
});
console.log(allPostive);

const atLeastOnePostive = numbers.some(function(value){
    return value>=0;
});
console.log(atLeastOnePostive);