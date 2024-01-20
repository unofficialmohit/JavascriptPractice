let x=20;
let y=x;
x=40;
console.log(x,y);
//js dont copy object it send object's reference to variable
let a={value:30};
let b=a;
a.value=70;
console.log(a,b);
//primitives are copied by value 
//objects are copied by their reference 
let number=20;
function increase(number)
{
    number++;
}
increase(number);
console.log(number);

let obj={value:10};
function inc(obj2)
{
    obj2.value++;
}
inc(obj);
console.log(obj);