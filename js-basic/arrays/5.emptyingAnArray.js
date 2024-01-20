let numbers=[1,2,3,4,5];
console.log(numbers);
numbers=[]; //assigning empty array
console.log(numbers);
numbers=[1,2,3,4,5];
console.log(numbers);
numbers.length=0;   //setting length to 0
console.log(numbers);
numbers=[1,2,3,4,5];
console.log(numbers);
numbers.splice(0,numbers.length);   //using splice
console.log(numbers);
numbers=[1,2,3,4,5];
console.log(numbers);   

while(numbers.length>0) //using pop()
{
    numbers.pop();
}
console.log(numbers);

