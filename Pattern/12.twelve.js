    //     ***         ***
    //    *****       *****
    //   *******     *******
    //  *********   *********
    // *********** ***********
    // ***********************
    //  *********************
    //   *******************
    //    *****************
    //     ***************
    //      *************
    //       ***********
    //        *********
    //         *******
    //          *****
    //           ***
    //            *
function star(value){
    let temp2=value/2;
    for(let i=0;i<temp2;i++)
    {   if(i==0) continue;
        let row='';
        for(let j=i;j<temp2;j++)
        {
            row+=' ';
        }
        for(let j=0;j<=(i*2);j++)
        {
            row+='*';
        }
        for(let j=0;j<(temp2-i)*2-1;j++)
        {
            row+=' ';
        }
        for(let j=0;j<=(i*2);j++)
        {
            row+='*';
        }
        console.log(row);
    }
    for(let i=0;i<value;i++)
    {
        let row='';
    for(let j=0;j<=i;j++)
    {   
        row+=' ';
    }
    for(let j=0;j<((value-i)*2)-1;j++)
    {
            row+='*';
    }
    console.log(row);

    }
   }
    star(12);





