let a='mohit';
a='aman;'
a[3]='r';
let b=a+'a';
console.log(a);

console.log(b);


//string primitive
const message='This is my first message  ';
console.log(message.length);
console.log(message[0]);
console.log(message.includes('my'));
console.log(message.startsWith('This'));
console.log(message.startsWith('this'));
console.log(message.endsWith('e'));
console.log(message.indexOf('my'));
console.log(message.replace('first','second'));
console.log(message.toUpperCase());
console.log(message.trim().length);


//string object
const another= new String('hi');
console.log(typeof message);//string
console.log(typeof another);//objects


//escape notation
const m='MY NAME IS\n\'MOHIT';
console.log(m);
console.log(m.split(''));
