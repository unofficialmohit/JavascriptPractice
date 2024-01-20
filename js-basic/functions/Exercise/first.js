console.log(sum([4,5,9,4]));
function sum(...args)
{
    if(args.length===1 && Array.isArray(args[0]))
    {
        args=[...args[0]];
    }
    return args.reduce((a,b)=> a+b );
}