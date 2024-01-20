// ******
// ******
// ******
// ******
// ******
function star(value)
{
    for(let i=0;i<value;i++)
    {   let row='';
        for(let j=0;j<value;j++)
        {
            row+='*';
        }
        console.log(row);
    }
}
star(5);