let x=2;
x='30';

function sum(a,b,c,d)
{
    let total=0;
    for(let key of arguments)
    {
        total+=key;
    }
    return total;
}
console.log(sum(4));
console.log(sum(1,2,3,4));
