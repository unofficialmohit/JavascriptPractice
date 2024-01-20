const m='MY NAME IS\n'+
'\'MOHIT\'';

console.log(m);

//object literals {}
//Boolean literals true,false
//String literals '',""
//Template literals ``
const another= `
Hi, Malware, 
Thankyou for joining my mailing list.
Regards,
Mohit`;
console.log(another);

//using variables in template literal
let sname='Kanu';
const test1='This is '+sname+' '+(2+3);
console.log(test1);
//now in template literal
const test2= `This iz ${sname} ${2+4}`;
console.log(test2);
