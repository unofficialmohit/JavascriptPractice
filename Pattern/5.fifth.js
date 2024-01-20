// **********
// *********
// ********
// *******
// ******
// *****
// ****
// ***
// **
// *
function star(value)
{
    for(let i=0;i<value;i++)
    {   let row='';
        for(let j=i;j<value;j++)
        {
            row+='*';
        }
        console.log(row);
    }
}
star(10);