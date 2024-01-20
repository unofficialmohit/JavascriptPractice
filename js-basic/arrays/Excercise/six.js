const numbers=[1,2,3,4];
const max=getMax(numbers);
console.log(max);
function getMax(array){
    return array.reduce((a,b)=>
    {
        return (a>b)?a:b;
    },0);
}