const numbers=[1,2,3,4];
//using for loop
for(let number of numbers)
{
    console.log(number);
}

//using foreach
numbers.forEach(function(element){
    console.log(element);
});

numbers.forEach(function(element,index){
    console.log(index,element);
});

//using for...in
for(let key in numbers)
{
    console.log(key,numbers[key]);
}