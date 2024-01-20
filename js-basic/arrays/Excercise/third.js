const numbers = [1,2,3,4,5,3];
const output = except(numbers , [1]);
console.log(output);
function except(array,excluded)
{
    const output=[];
   for(let key of numbers)
   {
    if(!excluded.includes(key))
    {
        output.push(key);
    }
   }
   return output;
}