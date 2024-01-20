const numbers=[1,2,3,4];
console.log(numbers.join(','));
const test=numbers.join(',');   //it will convert the array into string adding , in between 
console.log(test,numbers,typeof test);

const msg='This is my first message';
const parts=msg.split(' '); // it is basically used in urls //' ' here will remove all white spaces and split the msg variable
console.log(parts);
