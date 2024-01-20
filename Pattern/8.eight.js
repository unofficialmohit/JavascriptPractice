
//          *  
//         ***
//        *****
//       *******
//      *********
//     ***********
//    *************
//   ***************
//  *****************
// *******************
//  *****************
//   ***************
//    *************
//     ***********
//      *********
//       *******
//        *****
//         ***
//          *
function star(value){
    for(let i=0;i<=value;i++)
    {
        let row='';
        for(let j=i;j<value;j++)
        {
            row+=' ';
        }
        for(let j=0;j<(i*2)-1;j++)
        {
            row+='*';
        }
        console.log(row);
    }

    
    for(let i=0;i<value;i++)
    {   if(i==0) continue;
        let row='';
        for(let j=0;j<=i;j++)
        {   if(j==0) continue;
            row+=' ';
        }
    for(let j=0;j<((value-i)*2)-1;j++)
        {
            row+='*';
        }
        console.log(row);
      } 
     }

star(10);