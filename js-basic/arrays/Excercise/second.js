const numbers=[1,2,3,4];
console.log(includes(numbers,4));
function includes(array,searchElement)
{
for(let i=0;i<numbers.length;i++)
{ 
    if(numbers[i]===searchElement)
    {
        return true;
    }
}
return false;

}