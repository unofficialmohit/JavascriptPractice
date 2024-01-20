const numbers=[1,2,3,4,1];
try{
const count=countOccurrence(null,1);
console.log(count);

}
catch(e)
{
    console.log(e.message);
}
finally
{
    console.log("EVERY THING SEEMS COOL")
}
function countOccurrence(array,searchElement)
{
    if(!Array.isArray(array))
    {
        throw new Error('PLEASE USE ARRAY AS ARGUEMENT');
    }
    return array.reduce((accumulator,current)=>{

    const occurence=(current===searchElement)?1:0;
    return accumulator+occurence;
},0);            
}
