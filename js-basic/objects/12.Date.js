const now=new Date();
const date1=new Date('MAY 11 2018 09:00');
const date2=new Date(2018,4,11,9);
console.log(now.getFullYear());
now.setFullYear(2012);
console.log(now.getFullYear());
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toISOString());
console.log(date1.toDateString());




