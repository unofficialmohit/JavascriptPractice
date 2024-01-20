//         * 
//        * *
//       * * *
//      * * * *
//     * * * * *
//    * * * * * *
//   * * * * * * *
//  * * * * * * * *
function star(value){
for(let i=0;i<value;i++)
{
    let row='';
    for(let j=i;j<value-1;j++)
    {
        row+=' ';
    }
    for(let j=0;j<=i;j++)
    {
        row+='* ';
    }
    console.log(row);
}
}
star(8);