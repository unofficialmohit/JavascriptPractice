//         * 
//        * *
//       * * *
//      * * * *
//     * * * * *
//    * * * * * *
//   * * * * * * *
//   * * * * * * *
//    * * * * * *
//     * * * * *
//      * * * *
//       * * *
//        * *
//         *
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
    for(let i=value;i>=0;i--)
    {
        let row='';
        for(let j=value-1;j>=i;j--)
        {
            row+=' ';
        }
        for(let j=i-1;j>=0;j--)
        {
            row+='* ';
        }
        console.log(row);
    }
    }
    star(7);