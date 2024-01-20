// ******
// *    *
// *    *
// *    *
// ******
function star(value)
{
    for(let i=0;i<value;i++)
    {   let row='';
        for(let j=0;j<value;j++)
        {   if(i>0 && j>0 && i<value-1 && j<value-1){
                row+=' ';
            }
            else{
            row+='*';
            }
        }
        console.log(row);
    }
}
star(10);