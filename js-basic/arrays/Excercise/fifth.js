const numbers=[1,2,3,4,1];
const count=countOccurrence(numbers,1);
console.log(count);

function countOccurrence(array,searchElement)
{
    //    let count=0;
//     for(let key of array)
//     {
        
//         if(key===searchElement)
//         {
//             count++;
//         }
//     }
//     return count;
return array.reduce((accumulator,current)=>{

    const occurence=(current===searchElement)?1:0;
    return accumulator+occurence;
},0);            
}
