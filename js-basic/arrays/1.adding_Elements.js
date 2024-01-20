const numbers=[3,4];
// numbers=[];
//we can still add and remove elements in const 
//End
numbers.push(5,8);
console.log(numbers);

//begining

numbers.unshift(4,7);
console.log(numbers);

//Middle

numbers.splice(2,0,'a','b',5);
console.log(numbers);
