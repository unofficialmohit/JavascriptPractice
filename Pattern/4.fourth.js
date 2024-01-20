// *
// **
// ***
// ****
// *****
// ******
// *******
// ********
// *********
function star(value)
{
    for(let i=0;i<value;i++)
    {   let row='';
        for(let j=0;j<=i;j++)
        {
            row+='*';
        }
        console.log(row);
    }
}
star(10);