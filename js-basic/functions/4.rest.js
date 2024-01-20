let x=2;
x='30';

function sum(...args)   //...args is always the last parametere , all rest of arguements get stored by ...args
{
    return args.reduce((a,b)=>a+b);
}
console.log(sum(4,4));
console.log(sum(1,2,3,4));
