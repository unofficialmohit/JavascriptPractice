const numbers= arrayFromRange(1,4);
console.log(numbers);
function arrayFromRange(min,max){
    const abc=[];
    for(let i= min;i<=max;i++)
    {
        abc.push(i);
    }
    return abc;
}
